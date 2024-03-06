import { useSelector } from "react-redux";
import { selectUserData, resetUser } from "@/redux/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { changeAdress, getUserInfo } from "@/API/strapiConfig";
import {
  Col,
  Container,
  ResponsiveCol,
  ResponsiveTable,
  StyledBoldText,
  StyledNavBar,
  StyledProfile,
  StyledProfileContainer,
  StyledRightContent,
  StyledText,
  Table,
  TableCell,
  TableHeader,
  TableList,
  TableRow,
  Title,
} from "./Profile.styled";
import { translation } from "@/translation";
import { selectLanguage } from "@/redux/languageSlice";
import { Input } from "@/components/Input/Input";
import {
  StyledAdress,
  StyledAdressAdress,
  StyledAdressTitle,
  StyledBack,
  StyledForm,
  StyledWideItem,
} from "../Adress/Adress.styled";
import { BlackButton } from "@/components/BlackButton/BlackButton";
import { updateFormData } from "@/redux/formSlice";
import Success from "@/components/Success/Success";
import { StyledSuccessTitle } from "@/components/Success/Success.styled";

const orderStatusTranslations = [
  {
    pl: "oczekiwanie na płatność",
    en: "Awaiting Payment",
  },
  {
    pl: "przyjęte do realizacji",
    en: "Order Accepted",
  },
  {
    pl: "przesyłka wysłana",
    en: "Shipment Sent",
  },
  {
    pl: "anulowane",
    en: "Cancelled",
  },
  {
    pl: "odrzucone",
    en: "Rejected",
  },
  {
    pl: "zwrócone",
    en: "Returned",
  },
];
interface SignInProps {}
export default function SignIn({}: SignInProps) {
  const router = useRouter();
  const language = useSelector(selectLanguage);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt", "email", "id"]);

  const { email, id, confirmed } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [additionalInfo, setadditionalInfo] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [emaill, setEmaill] = useState("");

  const [contactActive, setContactActive] = useState(true);
  const [historyOrders, setHistoryOrders] = useState(false);

  const [orders, setOrders] = useState<any>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchData();
  }, [cookies]);

  const fetchData = async () => {
    const data = await getUserInfo(cookies.id, cookies.jwt);

    if (data) {
      setName(data.first_name);
      setSecondName(data.second_name);
      setStreet(data.street);
      setPostCode(data.post_code);
      setCountry(data.country);
      setPhone(data.phone_number);
      setCity(data.city);
      setEmaill(data.email);
      setOrders(data.orders);
    }
  };

  const handleResetUser = () => {
    // Wysyłanie akcji resetUser do Redux store
    dispatch(resetUser());
    setCookie("jwt", "", { path: "/", expires: new Date(0) });
    setCookie("email", "", { path: "/", expires: new Date(0) });
    setCookie("id", "", { path: "/", expires: new Date(0) });

    router.push("/");
  };
  const translateStatus = (element: any): any => {
    const status = orderStatusTranslations.find((status) => {
      return status.pl.slice(0, 5) === element.slice(0, 5);
    });

    return status ? status[language] : "Status nieznany";
  };
  const handleChangeAdress = async (e: any) => {
    e.preventDefault();
    const formData = {
      name: name,
      secondName: secondName,
      country: country,
      street: street,
      postCode: postCode,
      city: city,
      phone: phone,
      email: email,
    };

    // Tablica, która będzie zawierać nazwy pustych pól
    let emptyFields = [];

    // Iteracja przez każde pole w obiekcie formData
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "additionalInfo") {
        if (!value) {
          // Jeśli wartość jest pusta, dodaj nazwę pola do tablicy emptyFields
          emptyFields.push(key);
        }
      }
    }

    if (emptyFields.length === 0) {
      // Jeśli nie ma pustych pól, wyślij dane
      dispatch(updateFormData(formData));

      const suc = await changeAdress(
        name,
        secondName,
        country,
        street,
        postCode,
        city,
        phone,
        cookies.id,
        cookies.jwt
      );
      if (suc) {
        setSuccess(true);
      }
    } else {
      // Jeśli są puste pola, ustaw stan błędu i zwróć tablicę z nazwami pustych pól
    }
  };

  function formatISODateToSimpleDate(isoDate: any) {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() zwraca miesiąc od 0 do 11
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <StyledProfileContainer>
      <StyledProfile>
        <StyledNavBar>
          <StyledBoldText>{translation[language].myAccount}</StyledBoldText>
          <StyledText
            onClick={() => {
              setContactActive(true);
              setHistoryOrders(false);
            }}
          >
            {translation[language].addresTitle}
          </StyledText>
          <StyledText
            onClick={() => {
              setContactActive(false);
              setHistoryOrders(true);
            }}
          >
            {translation[language].yourOrder}
          </StyledText>
          <StyledText onClick={handleResetUser}>
            {translation[language].logOut}
          </StyledText>
          <StyledText></StyledText>
        </StyledNavBar>
        <StyledRightContent>
          {contactActive && (
            <StyledAdressAdress>
              <StyledAdressTitle>
                {translation[language].addresTitle}
              </StyledAdressTitle>
              <StyledForm onSubmit={handleChangeAdress}>
                <Input
                  type="text"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                  label={translation[language].firstName}
                />
                <Input
                  type="text"
                  value={secondName}
                  onChange={(e: any) => setSecondName(e.target.value)}
                  label={translation[language].lastName}
                />
                <Input
                  type="text"
                  value={country}
                  onChange={(e: any) => setCountry(e.target.value)}
                  label={translation[language].country}
                />
                <Input
                  type="text"
                  value={street}
                  onChange={(e: any) => setStreet(e.target.value)}
                  label={translation[language].street}
                />

                <Input
                  type="text"
                  value={postCode}
                  onChange={(e: any) => setPostCode(e.target.value)}
                  label={translation[language].postCode}
                />
                <Input
                  type="text"
                  value={city}
                  onChange={(e: any) => setCity(e.target.value)}
                  label={translation[language].city}
                />
                <Input
                  type="text"
                  value={phone}
                  onChange={(e: any) => setPhone(e.target.value)}
                  label={translation[language].phoneNumber}
                />
                <Input
                  type="text"
                  value={emaill}
                  onChange={(e: any) => setEmaill(e.target.value)}
                  label={"Email"}
                />
                {/* <Input
              type="text"
              value={additionalInfo}
              onChange={(e: any) => setadditionalInfo(e.target.value)}
              label={translation[language].additionalInfoOptional}
            /> */}
                <StyledWideItem>
                  <BlackButton margin={"16px 0"} type="submit">
                    {translation[language].save}
                  </BlackButton>
                </StyledWideItem>
              </StyledForm>
            </StyledAdressAdress>
          )}
          {historyOrders && (
            <Container>
              <StyledAdressTitle>
                {translation[language].yourOrder}
              </StyledAdressTitle>
              <ResponsiveTable>
                <TableList>
                  <TableHeader>
                    <Col>Nr.</Col>
                    <Col> {translation[language].submissionDate}</Col>
                    <Col>Status</Col>
                    <Col> {translation[language].value}</Col>
                    <Col>{translation[language].addres}</Col>
                  </TableHeader>
                  {orders.map((order: any, index: number) => (
                    <TableRow key={index}>
                      <ResponsiveCol data-label="Nr. zamówienia">
                        {order.id}
                      </ResponsiveCol>
                      <ResponsiveCol data-label="Data złożenia">
                        {formatISODateToSimpleDate(order.publishedAt)}
                      </ResponsiveCol>
                      <ResponsiveCol data-label="Status">
                        {translateStatus(order.status)}
                      </ResponsiveCol>
                      <ResponsiveCol data-label="Wartość">
                        {order.total_price}
                      </ResponsiveCol>
                      <ResponsiveCol data-label="Adres">
                        {order.adress}
                      </ResponsiveCol>
                    </TableRow>
                  ))}
                </TableList>
              </ResponsiveTable>
            </Container>
            // <Table>
            //   <thead>
            //     <tr>
            //       <TableHeader>Nr. zamówienia</TableHeader>
            //       <TableHeader>Data złożenia</TableHeader>
            //       <TableHeader>Status</TableHeader>
            //       <TableHeader>Wartość</TableHeader>
            //       <TableHeader>Adres wysyłki</TableHeader>
            //     </tr>
            //   </thead>
            //   <tbody>
            //     {orders.map((order: any) => (
            //       <TableRow key={order.id}>
            //         <TableCell>{order.id}</TableCell>
            //         <TableCell>
            //           {formatISODateToSimpleDate(order.publishedAt)}
            //         </TableCell>
            //         <TableCell>{order.status}</TableCell>
            //         <TableCell>{order.total_price}</TableCell>
            //         <TableCell>{order.adress}</TableCell>
            //       </TableRow>
            //     ))}
            //   </tbody>
            // </Table>
          )}
        </StyledRightContent>
      </StyledProfile>
      <Success showSuccess={success} setShowSuccess={setSuccess}>
        <StyledSuccessTitle>{translation[language].success}</StyledSuccessTitle>
      </Success>
    </StyledProfileContainer>
  );
}
