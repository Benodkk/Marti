import { useRef } from "react";
import {
  StyledModalContainer,
  StyledModalContent,
  StyledModalText,
  StyledModalTitle,
} from "./Modal.styled";
import { useClickOutside } from "@/hooks/clickOutside";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: any;
  children: any;
  title?: string;
}

export const Modal = ({ isOpen, children, setIsOpen, title }: ModalProps) => {
  const ref: any = useRef();

  useClickOutside(ref, () => isOpen && setIsOpen(false));
  if (!isOpen) return null;

  return (
    <StyledModalContainer>
      <StyledModalContent ref={ref}>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}

        <StyledModalText>{children}</StyledModalText>
      </StyledModalContent>
    </StyledModalContainer>
  );
};
