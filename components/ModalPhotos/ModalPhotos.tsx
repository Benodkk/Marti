import { useRef, useState } from "react";
import {
  StyledButton,
  StyledImage,
  StyledModalContainer,
  StyledModalContent,
  StyledModalText,
  StyledModalTitle,
  StyledPhotosContainer,
  StyledX,
} from "./ModalPhotos.styled";
import { useClickOutside } from "@/hooks/clickOutside";
import { IoIosClose } from "react-icons/io";

interface ModalPhotosProps {
  isOpen: boolean;
  setIsOpen: any;
  urls: any;
  currentUrl: any;
  setCurrentUrl: any;
}

export const ModalPhotos = ({
  isOpen,
  urls,
  setIsOpen,
  currentUrl,
  setCurrentUrl,
}: ModalPhotosProps) => {
  const ref: any = useRef();

  useClickOutside(ref, () => isOpen && setIsOpen(false));
  if (!isOpen) return null;

  const urlUp = () => {
    if (currentUrl == urls.length - 1) {
      setCurrentUrl(0);
    } else {
      setCurrentUrl(currentUrl + 1);
    }
  };

  const urlDown = () => {
    if (currentUrl == 0) {
      setCurrentUrl(urls.length - 1);
    } else {
      setCurrentUrl(currentUrl - 1);
    }
  };

  return (
    <StyledModalContainer>
      <StyledModalContent ref={ref}>
        <StyledPhotosContainer>
          {urls.length > 1 && (
            <StyledButton onClick={urlDown}>{"<"}</StyledButton>
          )}

          <StyledImage src={urls[currentUrl]} />
          {urls.length > 1 && (
            <StyledButton onClick={urlUp}>{">"}</StyledButton>
          )}
        </StyledPhotosContainer>

        <StyledX onClick={() => isOpen && setIsOpen(false)}>
          <IoIosClose size={40} />
        </StyledX>
      </StyledModalContent>
    </StyledModalContainer>
  );
};
