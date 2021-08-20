type ShortName = string;

type FullName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

type RichName = FullName & {
  nickName: string;
  prefix: Prefix;
};

type Prefix = "mrs" | "ms" | "mr";

type LastName = {
  prefix: Prefix;
  lastName: string;
};

type Name = ShortName | FullName | RichName | LastName;

type PersonInfo = {
  name: string;
  city?: string;
};

function sayHi(info: PersonInfo): string {
  if (info.city) {
    return `Hi, my name is ${info.name}, I live in ${info.city}`;
  } else {
    return `Hi, my name is ${info.name}`;
  }
}

const response: PersonInfo = sayHi("Richard", "Atlantic City");
const city = response.city;
console.log(city);