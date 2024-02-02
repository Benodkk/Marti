import { getCategories } from "@/API/categories";
import { getProductsByCategoriesId } from "@/API/product";
import { useEffect, useState } from "react";
import { OneDetail } from "./OneDetail";
import {
  StyledBikiniDetails,
  StyledBikiniDetailsContainer,
} from "../Product.styled";
import { StyledDetailTitle } from "./OneDetail.styled";
import { YesOrNo } from "./YesOrNo";

import ConnectorsYes from "@/assets/connectorsYes.png";
import ConnectorsNo from "@/assets/connectorsNo.png";

import botConnectorsYes from "@/assets/botConnectorsYes.png";
import botConnectorsNo from "@/assets/botConnectorsNo.png";

import midConnectorsYes from "@/assets/midConnectorsYes.png";
import midConnectorsNo from "@/assets/midConnectorsNo.png";
import { Loader } from "@/components/Loader/Loader";

interface BikiniDetailsProps {
  show: any;
  setDetailsData: any;
  categories: any;
  braStyleName: string;
  bikiniDetailsName: string;
  setModalContent: any;
  setIsModalOpen: any;
  setModalTitle: any;
}

export const BikiniDetails = ({
  show,
  setDetailsData,
  categories,
  braStyleName,
  bikiniDetailsName,
  setModalContent,
  setIsModalOpen,
  setModalTitle,
}: BikiniDetailsProps) => {
  // arrays
  const [braStyle, setBraStyle] = useState<any>();
  const [cupSize, setCupSize] = useState<any>();
  const [pushUps, setPushUps] = useState<any>();
  const [connectors, setConnectors] = useState<any>();
  const [bottomBacks, setBottomBacks] = useState<any>();
  const [botConnectors, setBotConnectors] = useState<any>();
  const [midConnectors, setMidConnectors] = useState<any>();
  const [backStraps, setBackStraps] = useState<any>();
  const [backStrapsConnectors, setBackStrapsConnectors] = useState<any>();
  // choice
  const [braStyleType, setBraStyleType] = useState<any>();
  const [cupSizeType, setCupSizeType] = useState<any>();
  const [pushUpsType, setPushUpsType] = useState<any>();
  const [connectorsType, setConnectorsType] = useState<any>();
  const [bottonBacksType, setBottonBacksType] = useState<any>();
  const [botConnectorsType, setBotConnectorsType] = useState<any>();
  const [midConnectorsType, setMidConnectorsType] = useState<any>();
  const [backStrapsType, setBackStrapsType] = useState<any>();
  const [backStrapsConnectorsType, setBackStrapsConnectorsType] =
    useState<any>();

  // yes or no decisions

  const [configureConnectors, setConfigureConnectors] = useState(false);
  const [configureBotConnectors, setConfigureBotConnectors] = useState(false);
  const [configureMidConnectors, setConfigureMidConnectors] = useState(false);

  useEffect(() => {
    if (categories) {
      getData();
    }
  }, [categories]);

  useEffect(() => {
    const stateObject = {
      braStyleType: { value: braStyleType, name: "Bra style" },
      cupSizeType: { value: cupSizeType, name: "Cup size" },
      pushUpsType: { value: pushUpsType, name: "Push up" },
      connectorsType: { value: connectorsType, name: "Connectors" },
      bottonBacksType: { value: bottonBacksType, name: "Bottom Back" },
      botConnectorsType: {
        value: botConnectorsType,
        name: "Bottom Connectors",
      },
      midConnectorsType: {
        value: midConnectorsType,
        name: "Middle Connectors",
      },
      backStrapsType: { value: backStrapsType, name: "Back Straps" },
      backStrapsConnectorsType: {
        value: backStrapsConnectorsType,
        name: "Back Straps Connectors",
      },
    };
    setDetailsData(stateObject);
  }, [
    braStyleType,
    cupSizeType,
    pushUpsType,
    connectorsType,
    bottonBacksType,
    botConnectorsType,
    midConnectorsType,
    backStrapsType,
    backStrapsConnectorsType,
  ]);

  const getProductsDetails = async (type: string) => {
    if (categories) {
      const id = categories.find((category: any) => category.slug === type)?.id;

      const details: any = await getProductsByCategoriesId(id);
      return details;
    }
  };

  const getData = async () => {
    // get bra
    const bra: any = await getProductsDetails(braStyleName);
    if (bra) {
      setBraStyle(bra);
    }
    // get cup size
    const cupSizes: any = await getProductsDetails("cup-size");
    if (cupSizes) {
      cupSizes.sort((a: any, b: any) => a.menu_order - b.menu_order);
      setCupSize(cupSizes);
    }

    // get pushUp
    const pushUps: any = await getProductsDetails("push-up");
    if (pushUps) {
      setPushUps(pushUps);
    }

    // get connectors
    const connectors: any = await getProductsDetails("connectors");
    if (connectors) {
      setConnectors(connectors);
    }

    // bottomBacks
    const bottomBack: any = await getProductsDetails("bottom-back");
    if (bottomBack) {
      setBottomBacks(bottomBack);
    }

    const botConnectors: any = await getProductsDetails("bottom-connectors");
    if (botConnectors) {
      setBotConnectors(botConnectors);
    }

    const midConnectors: any = await getProductsDetails("mid-connectors");
    if (midConnectors) {
      setMidConnectors(midConnectors);
    }

    const backStraps: any = await getProductsDetails("back-straps");
    if (backStraps) {
      setBackStraps(backStraps);
    }

    const backStrapsConnectors: any = await getProductsDetails(
      "back-straps-connectors"
    );
    if (backStrapsConnectors) {
      setBackStrapsConnectors(backStrapsConnectors);
    }
  };

  return (
    <StyledBikiniDetailsContainer $display={show ? "flex" : "none"}>
      <StyledDetailTitle>Bra Style</StyledDetailTitle>
      {braStyle ? (
        <StyledBikiniDetails>
          {braStyle?.map((element: any) => {
            return (
              <OneDetail
                image={true}
                details={element}
                onClick={() => setBraStyleType(element)}
                active={braStyleType?.id === element.id}
                setModalContent={setModalContent}
                setIsModalOpen={setIsModalOpen}
                setModalTitle={setModalTitle}
                moreDetails={true}
              />
            );
          })}
        </StyledBikiniDetails>
      ) : (
        <Loader />
      )}

      <StyledDetailTitle>Cup Size</StyledDetailTitle>
      {cupSize ? (
        <StyledBikiniDetails>
          {cupSize?.map((element: any) => {
            return (
              <OneDetail
                details={element}
                onClick={() => setCupSizeType(element)}
                active={cupSizeType?.id === element.id}
              />
            );
          })}
        </StyledBikiniDetails>
      ) : (
        <Loader />
      )}

      <StyledDetailTitle>Push Up</StyledDetailTitle>
      {pushUps ? (
        <StyledBikiniDetails>
          {pushUps?.map((element: any) => {
            return (
              <OneDetail
                details={element}
                onClick={() => setPushUpsType(element)}
                active={pushUpsType?.id === element.id}
              />
            );
          })}
        </StyledBikiniDetails>
      ) : (
        <Loader />
      )}

      <StyledDetailTitle>Connectors</StyledDetailTitle>
      <YesOrNo
        active={configureConnectors}
        firstOnClick={() => {
          setConfigureConnectors(false);
          setConnectorsType(undefined);
        }}
        secondOnClick={() => setConfigureConnectors(true)}
        firstImage={ConnectorsNo.src}
        secondImage={ConnectorsYes.src}
      />
      {configureConnectors &&
        (connectors ? (
          <StyledBikiniDetails>
            {connectors?.map((element: any) => {
              return (
                <OneDetail
                  details={element}
                  onClick={() => setConnectorsType(element)}
                  active={connectorsType?.id === element.id}
                  image={true}
                  setModalContent={setModalContent}
                  setIsModalOpen={setIsModalOpen}
                  setModalTitle={setModalTitle}
                  moreDetails={true}
                />
              );
            })}
          </StyledBikiniDetails>
        ) : (
          <Loader />
        ))}
      <StyledDetailTitle>Bottom backs</StyledDetailTitle>
      {bottomBacks ? (
        <StyledBikiniDetails>
          {bottomBacks?.map((element: any) => {
            return (
              <OneDetail
                details={element}
                onClick={() => setBottonBacksType(element)}
                active={bottonBacksType?.id === element.id}
                image={true}
              />
            );
          })}
        </StyledBikiniDetails>
      ) : (
        <Loader />
      )}

      <StyledDetailTitle>Bottom connectors</StyledDetailTitle>
      <YesOrNo
        active={configureBotConnectors}
        firstOnClick={() => {
          setConfigureBotConnectors(false);
          setBotConnectorsType(undefined);
        }}
        secondOnClick={() => setConfigureBotConnectors(true)}
        firstImage={botConnectorsNo.src}
        secondImage={botConnectorsYes.src}
      />
      {configureBotConnectors &&
        (botConnectors ? (
          <StyledBikiniDetails>
            {botConnectors?.map((element: any) => {
              return (
                <OneDetail
                  details={element}
                  onClick={() => setBotConnectorsType(element)}
                  active={botConnectorsType?.id === element.id}
                  image={true}
                  setModalContent={setModalContent}
                  setIsModalOpen={setIsModalOpen}
                  setModalTitle={setModalTitle}
                  moreDetails={true}
                />
              );
            })}
          </StyledBikiniDetails>
        ) : (
          <Loader />
        ))}
      <StyledDetailTitle>Middle connetors</StyledDetailTitle>
      <YesOrNo
        active={configureMidConnectors}
        firstOnClick={() => {
          setConfigureMidConnectors(false);
          setMidConnectorsType(undefined);
        }}
        secondOnClick={() => setConfigureMidConnectors(true)}
        firstImage={midConnectorsNo.src}
        secondImage={midConnectorsYes.src}
      />
      {configureMidConnectors &&
        (midConnectors ? (
          <StyledBikiniDetails>
            {midConnectors?.map((element: any) => {
              return (
                <OneDetail
                  details={element}
                  onClick={() => setMidConnectorsType(element)}
                  active={midConnectorsType?.id === element.id}
                  image={true}
                  setModalContent={setModalContent}
                  setIsModalOpen={setIsModalOpen}
                  setModalTitle={setModalTitle}
                  moreDetails={true}
                />
              );
            })}
          </StyledBikiniDetails>
        ) : (
          <Loader />
        ))}
      <StyledDetailTitle>Back Straps</StyledDetailTitle>
      {backStraps ? (
        <StyledBikiniDetails>
          {backStraps?.map((element: any) => {
            return (
              <OneDetail
                details={element}
                onClick={() => {
                  setBackStrapsType(element);
                  if (element.slug != "connector") {
                    setBackStrapsConnectorsType(undefined);
                  }
                }}
                active={backStrapsType?.id === element.id}
                image={true}
              />
            );
          })}
        </StyledBikiniDetails>
      ) : (
        <Loader />
      )}
      <StyledBikiniDetails>
        {backStrapsType?.slug === "connector" &&
          (backStrapsConnectors ? (
            backStrapsConnectors?.map((element: any) => {
              return (
                <OneDetail
                  details={element}
                  onClick={() => setBackStrapsConnectorsType(element)}
                  active={backStrapsConnectorsType?.id === element.id}
                  image={true}
                  setModalContent={setModalContent}
                  setIsModalOpen={setIsModalOpen}
                  setModalTitle={setModalTitle}
                  moreDetails={true}
                />
              );
            })
          ) : (
            <Loader />
          ))}
      </StyledBikiniDetails>
    </StyledBikiniDetailsContainer>
  );
};
