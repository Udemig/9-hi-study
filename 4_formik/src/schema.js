import * as yup from 'yup';

// validasyon şeması
// inputlardaki değerlerin geçerli olabilmesi için gerekli olan koşulları ifade eder

// metin içerisnde en az
// 1 büyük harf
// 1 küçük harf
// 1 rakam
// 1 özel karakter
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

const schema = yup.object().shape({
  // shape içerisnde bir alan ismi ve o alanın geçerli olması için gerekli olan koşulları tanımlanmalı

  // email alanının geçerli olması için gerekli koşullarasd
  email: yup
    .string()
    .email('Email geçerli bir formatta değil')
    .required('Email zorunlu bir alan'),

  // yaş alanının geçerli olması için gerekli koşullar
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer('Lütfen bir tam sayı değeri giriniz')
    .required('Yaş zorunlu bir alan'),

  // şifre alanının geçerli olması için gerekli koşullar
  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter olmalı')
    .matches(regex, 'Şifreniz yeterince güçlü değil')
    .required('Şifre zorunlu bir alan'),

  // şifre onay alanının geçerli olması için gerekli koşullar
  // oneOf(): kontrol ettiğimiz inputtaki verinin dizi içerisndeki değerlerden biriyle aynı olmasını kontrol eder
  // ref(): farklı bir inputtaki veriyi çağırmamızı sağlar
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Doğrulama şifreniz asıl şifreyle eşleşmiyor')
    .required('Lütfen şifrenizi doğrulayın'),
});

export default schema;
