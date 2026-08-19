import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { goToCart, goToPayment, saveDelivery } from "../store/reducers/cart";
import * as S from "./styles";

const Delivery = () => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      receiver: "",
      address: "",
      city: "",
      cep: "",
      number: "",
      complement: "",
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, "O nome deve ter pelo menos 5 caracteres")
        .required("Campo obrigatório"),
      address: Yup.string()
        .min(5, "Endereço muito curto")
        .required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, "CEP inválido ou incompleto")
        .required("Campo obrigatório"),
      number: Yup.string().required("Campo obrigatório"),
      complement: Yup.string(),
    }),
    onSubmit: (values) => {
      dispatch(saveDelivery(values));
      dispatch(goToPayment());
    },
  });
  return (
    <>
      <S.Title>Entrega</S.Title>
      <S.Form onSubmit={form.handleSubmit}>
        <S.InputGroup>
          <S.Label htmlFor="receiver">Quem irá receber</S.Label>
          <S.Input
            id="receiver"
            name="receiver"
            type="text"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.receiver && form.errors.receiver && (
            <small>{form.errors.receiver}</small>
          )}
        </S.InputGroup>
        <S.InputGroup>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input
            id="address"
            name="address"
            type="text"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.address && form.errors.address && (
            <small>{form.errors.address}</small>
          )}
        </S.InputGroup>
        <S.InputGroup>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input
            id="city"
            name="city"
            type="text"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.city && form.errors.city && (
            <small>{form.errors.city}</small>
          )}
        </S.InputGroup>
        <S.Row>
          <S.InputGroup>
            <S.Label htmlFor="cep">CEP</S.Label>
            <InputMask
              mask="99999-999"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              {(inputProps: any) => <S.Input {...inputProps} />}
            </InputMask>
            {form.touched.cep && form.errors.cep && (
              <small>{form.errors.cep}</small>
            )}
          </S.InputGroup>
          <S.InputGroup>
            <S.Label htmlFor="number">Número</S.Label>
            <S.Input
              id="number"
              name="number"
              type="text"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.number && form.errors.number && (
              <small>{form.errors.number}</small>
            )}
          </S.InputGroup>
        </S.Row>
        <S.InputGroup>
          <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
          <S.Input
            id="complement"
            name="complement"
            type="text"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputGroup>
        <S.Button type="submit">Continuar com o pagamento</S.Button>
        <S.Button type="button" onClick={() => dispatch(goToCart())}>
          Voltar para o carrinho
        </S.Button>
      </S.Form>
    </>
  );
};

export default Delivery;
