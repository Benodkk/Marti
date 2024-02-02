import { useEffect, useState } from "react";
import { StyledPrice } from "./OneDetail.styled";
import {
  StyledOneProdcutionTime,
  StyledOneProdcutionTimeContainer,
  StyledProdcutionTimeContainer,
  StyledProdcutionTimeLabel,
  StyledProductionTime,
  StyledProductiontimeInfo,
} from "./ProductionTime.styled";
import { getProductsByCategoriesId } from "@/API/product";
import { Loader } from "@/components/Loader/Loader";

interface ProductionTimeProps {
  categories: any;
  productionTimeName: any;
  show: any;
  chosenProductionTime: any;
  setChosenProductionTime: any;
}

export const ProductionTime = ({
  categories,
  productionTimeName,
  show,
  chosenProductionTime,
  setChosenProductionTime,
}: ProductionTimeProps) => {
  const [productionTime, setProductionTime] = useState<any>();

  useEffect(() => {
    if (categories) getData();
  }, [productionTimeName]);

  const getProductsDetails = async (type: string) => {
    if (categories) {
      const id = categories.find((category: any) => category.slug === type)?.id;

      const details: any = await getProductsByCategoriesId(id);
      return details;
    }
  };
  const getData = async () => {
    const production: any = await getProductsDetails(productionTimeName);
    if (production) setProductionTime(production);
  };

  function stripHtml(html: any) {
    return html.replace(/<[^>]*>?/gm, "");
  }

  return (
    <StyledProdcutionTimeContainer $display={show ? "flex" : "none"}>
      <StyledProductiontimeInfo>
        To this time, has to be added also period of delivery which depend on
        the chosed company. In the case of FAST and PRIORITY orders, we suggest
        choosing the UPS SAVER option, delivery time will be within 2/3 business
        days.
      </StyledProductiontimeInfo>
      <StyledProductionTime>
        {productionTime ? (
          productionTime.map((type: any) => {
            return (
              <StyledOneProdcutionTimeContainer>
                <StyledOneProdcutionTime
                  $active={
                    chosenProductionTime && type.id == chosenProductionTime.id
                  }
                  onClick={() => setChosenProductionTime(type)}
                >
                  <StyledProdcutionTimeLabel>
                    {type.name}
                  </StyledProdcutionTimeLabel>
                  <StyledProdcutionTimeLabel>
                    {stripHtml(type.description)}
                  </StyledProdcutionTimeLabel>
                </StyledOneProdcutionTime>
                {type.price && <StyledPrice>+ {type.price} zł</StyledPrice>}
              </StyledOneProdcutionTimeContainer>
            );
          })
        ) : (
          <Loader />
        )}
      </StyledProductionTime>
    </StyledProdcutionTimeContainer>
  );
};
