import React from "react";
import { Wrapper } from "./style";
import img1 from "../../assets/imgs/tobe1.png";
import img2 from "../../assets/imgs/tobe2.png";
import Quiz from "../quiz";
import { firstPlan, secondPlan, thirdPlan, fourthPlan } from "../../mock/data";

const About = () => {
  return (
    <Wrapper>
      <Wrapper.Text>
        <Wrapper.Bold>To be fe'li nima?</Wrapper.Bold>
        To be fe’li bog‘lovchi fe’l bo‘lib, gapning predmetini uni tasvirlovchi
        yoki aniqlovchi ot, olmosh yoki sifatdosh bilan bog‘lash uchun
        ishlatiladi. Bundan tashqari, hozirgi davomiy (masalan, "Men yuraman")
        yoki passiv ovoz (masalan, "Kitob Jeyn tomonidan yozilgan") kabi fe'l
        zamonlarini yaratish uchun yordamchi fe'l sifatida ham ishlatilishi
        mumkin. To be fe'li ingliz tilida eng ko'p qo'llaniladigan fe'llardan
        biri bo'lib, asosiy jumlalarni qurishda muhim ahamiyatga ega.
      </Wrapper.Text>
      <Quiz data={firstPlan} />
      <Wrapper.Text>
        <Wrapper.Bold>To be fe'lining ishlatilishi:</Wrapper.Bold>
        1. Mavzu va zamonga qarab to be fe’lining to‘g‘ri shaklini ishlating.
        Masalan, “I am” birinchi shaxs birlik uchun hozirgi zamon shakli, “he
        is” esa III shaxs birlik uchun hozirgi zamon shaklidir. <br /> 2. Holat
        yoki holatni tasvirlash uchun to be fe’lidan foydalaning. Masalan, "I am
        happy" yoki "He is tired". <br /> 3. Biror narsani aniqlash yoki
        tasniflash uchun to be fe’lidan foydalaning. Masalan, "That is a cat"
        yoki "She is a doctor ". <br /> 4. Savol va inkorlarda bo‘lish fe’lidan
        foydalaning. Masalan, "Are you coming?" yoki "I'm not going".
      </Wrapper.Text>
      <Quiz data={secondPlan} />
      <Wrapper.Img width={450} height={220} src={img1} />
      <br />
      <Wrapper.Text>
        <Wrapper.Bold>To be fe'li orqali gap tuzish</Wrapper.Bold>
        To be fe'li quyidagi struktura yordamida tuziladi: 'Subject + to be +
        verb' <br /> Misol uchun: ' I am pupil ', ' You are beautiful '
      </Wrapper.Text>
      <Quiz data={thirdPlan} />

      <Wrapper.Text style={{ marginBottom: "30px" }}>
        <Wrapper.Bold>
          To be fe'lini darak, inkor va so'roq shakllarda foydalanish
        </Wrapper.Bold>
        Darak shakli: I am a student. She is happy. They are playing. <br />
        Inkor shakli: I am not tired. He is not coming. We are not going. <br />
        So'roq shakli: Am I late? Is she your sister? Are they ready?
      </Wrapper.Text>
      <Wrapper.Img width={550} height={265} src={img2} />
      <Quiz data={fourthPlan} />
      <br />
      <br />
    </Wrapper>
  );
};

export default About;
