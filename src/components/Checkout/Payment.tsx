import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";
import {
  goToConfirmation,
  goToDelivery,
  setOrderId,
} from "../store/reducers/cart";
import { useCheckoutMutation } from "../../Services/api";
import * as S from "./styles";

const Payment = () => {
  const dispatch = useDispatch();
  const [checkout] = useCheckoutMutation();
  const { items, delivery } = useSelector((state: RootReducer) => state.cart);
  const form = useFormik({
    initialValues: {
      cardOwner: "",
      cardNumber: "",
      cvv: "",
      month: "",
      year: "",
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string()
        .min(5, "Nome muito curto")
        .required("Campo obrigatório"),
      cardNumber: Yup.string()
        .matches(
          /^\d{4} \d{4} \d{4} \d{4}$/,
          "Número de cartão inválido ou incompleto",
        )
        .required("Campo obrigatório"),
      cvv: Yup.string()
        .matches(/^\d{3}$/, "CVV inválido ou incompleto")
        .required("Campo obrigatório"),
      month: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido")
        .required("Campo obrigatório"),
      year: Yup.string()
        .matches(/^\d{4}$/, "Ano inválido ou incompleto")
        .required("Campo obrigatório"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await checkout({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco,
          })),
          delivery: {
            receiver: delivery.receiver,
            address: {
              description: delivery.address,
              city: delivery.city,
              zipCode: delivery.cep,
              number: Number(delivery.number),
              complement: delivery.complement,
            },
          },
          payment: {
            card: {
              name: values.cardOwner,
              number: values.cardNumber,
              code: Number(values.cvv),
              expires: {
                month: Number(values.month),
                year: Number(values.year),
              },
            },
          },
        }).unwrap();
        dispatch(setOrderId(response.orderId));
        dispatch(goToConfirmation());
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <>
      <S.Title>Pagamento - Valor a pagar R$ 190,90</S.Title>

      <S.Form onSubmit={form.handleSubmit}>
        <S.InputGroup>
          <S.Label htmlFor="cardOwner">Nome no cartão</S.Label>

          <S.Input
            id="cardOwner"
            name="cardOwner"
            type="text"
            value={form.values.cardOwner}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />

          {form.touched.cardOwner && form.errors.cardOwner && (
            <small>{form.errors.cardOwner}</small>
          )}
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <S.Label htmlFor="cardNumber">Número do cartão</S.Label>

            <InputMask
              mask="9999 9999 9999 9999"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              {(inputProps: any) => (
                <S.Input
                  {...inputProps}
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                />
              )}
            </InputMask>

            {form.touched.cardNumber && form.errors.cardNumber && (
              <small>{form.errors.cardNumber}</small>
            )}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="cvv">CVV</S.Label>

            <InputMask
              mask="999"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              {(inputProps: any) => (
                <S.Input {...inputProps} id="cvv" name="cvv" type="text" />
              )}
            </InputMask>

            {form.touched.cvv && form.errors.cvv && (
              <small>{form.errors.cvv}</small>
            )}
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <S.Label htmlFor="month">Mês de vencimento</S.Label>

            <InputMask
              mask="99"
              value={form.values.month}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              {(inputProps: any) => (
                <S.Input {...inputProps} id="month" name="month" type="text" />
              )}
            </InputMask>

            {form.touched.month && form.errors.month && (
              <small>{form.errors.month}</small>
            )}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="year">Ano de vencimento</S.Label>

            <InputMask
              mask="9999"
              value={form.values.year}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              {(inputProps: any) => (
                <S.Input {...inputProps} id="year" name="year" type="text" />
              )}
            </InputMask>

            {form.touched.year && form.errors.year && (
              <small>{form.errors.year}</small>
            )}
          </S.InputGroup>
        </S.Row>

        <S.Button type="submit">Finalizar pagamento</S.Button>

        <S.Button type="button" onClick={() => dispatch(goToDelivery())}>
          Voltar para a edição de endereço
        </S.Button>
      </S.Form>
    </>
  );
};

export default Payment;
