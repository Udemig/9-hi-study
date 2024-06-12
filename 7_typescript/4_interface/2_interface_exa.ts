interface IAdress {
  city: string;
  street: string;
  zipCode: number;
}

interface IEducation {
  degree: string;
  school: string;
  graduationYear?: number;
}

interface IJob {
  company: string;
  startDate: Date;
  title: string;
}

interface IPerson {
  id: number;
  firstname: string;
  lastname: string;
  age: number;

  adress: IAdress;
  education: IEducation;
  job: IJob[];
}

const faruk: IPerson = {
  id: 1241342,
  firstname: "faruk",
  lastname: "kaya",
  age: 45,
  adress: {
    city: "İstanbul",
    street: "453sk",
    zipCode: 34410,
  },

  education: {
    degree: "56",
    school: "İTÜ",
    graduationYear: 2020,
  },

  job: [
    {
      company: "X Şirketi",
      startDate: new Date(),
      title: "Frontend",
    },
  ],
};
