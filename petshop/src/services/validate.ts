import { StatusCodes } from 'http-status-codes';

import emailPattern from '../utils/emailPattern';
import Err from '../utils/Err';
import errorMessage from '../utils/errorMessages';

const emailClient = (email: string) => {
  //
  if (email === undefined)
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.allFields);
  if (email === '')
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.allFields);
  if (!emailPattern.test(email))
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.invalid);

  return true;
};

const name = (nome: string): never | boolean => {
  //
  if (typeof nome !== 'string')
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.string);

  if (nome.length < 5)
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.nameLenght);

  return true;
};

const telefone = (phone: string): never | boolean => {
  //
  const cleanPhone = phone.replace(/\D/g, '');

  if (cleanPhone.length !== 11)
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.invalidPhone);

  return true;
};

const endereco = (
  street: string,
  district: string,
  city: string
): never | boolean => {
  //
  if (
    typeof street !== 'string' ||
    typeof district !== 'string' ||
    typeof city !== 'string'
  )
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.string);

  if (street.length < 5 || district.length < 3 || city.length < 3)
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.streetLenght);

  return true;
};

const numero = (number: number): never | boolean => {
  //
  if (Number.isNaN(Number(number)))
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.number);

  return true;
};

export default {
  emailClient,
  name,
  telefone,
  endereco,
  numero,
};
