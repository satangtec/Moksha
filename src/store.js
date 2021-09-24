import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 6,
  pages: 6,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Preface",
      image: "/me.jpg",
      aspect: 1.51,
      text: "This portfolio is proposed about history of my personality, knowledge, graduation, ability including my development and activities. It is proud to me of my success and some evidence of example such as pictures and activities shown in this portfolio. I hope my portfolio can present my ability informatively and person who read my portfolio could understand my ability definitely. If this portfolio may have to get corrected or improved . pls advise."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Profile",
      image: "/pro.jpg",
      aspect: 1.5,
      text:
        "สว้สดีครับผมชื่อ นาย ภงค์พรหม ศรีมันตะ เป็นคนเชียงใหม่นะครับ เรียนปริญญาตรีจบปี 2020 จากมหาลัยราชมงคลล้านนา เชียงใหม่ สาขาสาขาสารสนเทศ เอกพัฒนาซอฟต์แวร์ สิ่งที่สนใจ : วิทยาศาสตร์, เทคโนโลยี, 3D Model, blockchain, IoT, ปัญญาประดิษฐ์ ( AI : Artificial Intelligence )"
    },
    // {
    //   offset: 3,
    //   factor: 2.25,
    //   header: "Catalina",
    //   image: "/ph1.jpg",
    //   aspect: 1.5037,
    //   text:
    //     "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."
    // },
    // {
    //   offset: 4,
    //   factor: 2.0,
    //   header: "Building 21",
    //   image: "/ph3.jpg",
    //   aspect: 0.665,
    //   text:
    //     "We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."
    // },
    // {
    //   offset: 5,
    //   factor: 1.75,
    //   header: "Sector 8",
    //   image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
    //   aspect: 1.55,
    //   text:
    //     "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."
    // },
    { offset: 3, factor: 1.05, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 4, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    // { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    // { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    // { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    // { x: -5, offset: 6, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 5, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
