import React from "react";
import styles from "./aboutCompany.module.css";
import TopText from "../../components/TopText/TopText";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import leroyMerlin from "../../components/images/companys/leroyMerlin.png";
import cotofey from "../../components/images/companys/cotofey.png";
import lucoil from "../../components/images/companys/lucoil.png";
import vtb from "../../components/images/companys/vtb.png";
import omk from "../../components/images/companys/omk.png";
import fosagro from "../../components/images/companys/fosagro.png";
import evraz from "../../components/images/companys/evraz.png";
import OrangeUnderline from "../../components/OrangeUnderline/OrangeUnderline";
import QuestionsFooter from "../../components/QuestionsFooter/QuestionsFooter";

const AboutCompany: React.FC = () => {
  const companies = [
    { id: 1, image: leroyMerlin },
    { id: 2, image: cotofey },
    { id: 3, image: lucoil },
    { id: 4, image: vtb },
    { id: 5, image: omk },
    { id: 6, image: fosagro },
    { id: 7, image: evraz },
  ];

  return (
    <div>
      <TopText title={"О компании"} />
      <div className="container">
        <section className={`${styles.preview}`}>
          <div className={styles.previewText}>
            <h2 className="text-3xl">О компании</h2>
            <p>
              В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые
              особенности структуры проекта.
            </p>
            <p>
              В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые
              особенности структуры проекта опыт мы упускаем, что ключевые особенности
              структуры проекта.
            </p>
            <p>
              Значимость этих проблем настолько очевидна, что реализация намеченных
              плановых заданий, а также свежий взгляд на привычные вещи - безусловно
              открывает новые горизонты для системы массового участия. Учитывая ключевые
              сценарии поведения, выбранный нами инновационный путь способствует повышению
              качества первоочередных требований. Имеется спорная точка зрения, гласящая
              примерно следующее.
            </p>
          </div>
          <div className={styles.previewImg}>
            <img
              className=""
              src={require("../../components/images/keyboard.jpeg")}
              alt="keyboard"
            />
          </div>
        </section>

        <section className={styles.sliderSection}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={75}
            totalSlides={companies.length}
            visibleSlides={4}
          >
            <Slider>
              {companies.map((company, index) => (
                <Slide index={index} key={company.id}>
                  <div className={styles.cardContainer}>
                    <div
                      style={{
                        backgroundImage: `url(${company.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "100px",
                        height: "80px",
                        paddingBottom: "0",
                      }}
                    />
                  </div>
                </Slide>
              ))}
            </Slider>
            <ButtonBack className={styles.Back}>
              <svg
                width="5.832031"
                height="10.000000"
                viewBox="0 0 5.83203 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <path
                  id="Icon"
                  d="M5.59 0.23C5.91 0.53 5.91 1.03 5.59 1.34L1.91 5L5.59 8.65C5.91 8.96 5.91 9.46 5.59 9.76C5.28 10.07 4.78 10.07 4.47 9.76L0.23 5.55C-0.08 5.24 -0.08 4.75 0.23 4.44L4.47 0.23C4.78 -0.08 5.28 -0.08 5.59 0.23Z"
                  fill="#487B6C"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
              </svg>
            </ButtonBack>
            <ButtonNext className={styles.Next}>
              <svg
                width="5.832031"
                height="10.000000"
                viewBox="0 0 5.83203 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <path
                  id="Icon"
                  d="M0.23 0.23C0.54 -0.08 1.04 -0.08 1.35 0.23L5.59 4.44C5.91 4.75 5.91 5.24 5.59 5.55L1.35 9.76C1.04 10.07 0.54 10.07 0.23 9.76C-0.08 9.46 -0.08 8.96 0.23 8.65L3.91 5L0.23 1.34C-0.08 1.03 -0.08 0.53 0.23 0.23Z"
                  fill="#487B6C"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
              </svg>
            </ButtonNext>
          </CarouselProvider>
        </section>

        <section className={`${styles.production}`}>
          <OrangeUnderline>Производство</OrangeUnderline>
          <p className={styles.productionDesc}>
            Наше предприятие специализируется на изготовлении кастомных принтов и
            уникальных мелочей. Мы используем передовые технологии и материалы высокого
            качества для создания продуктов, отвечающих самым высоким стандартам. Наша
            команда профессионалов готова воплотить любую вашу идею в реальность,
            обеспечивая индивидуальный подход к каждому заказу. Благодаря нашему опыту и
            творческому подходу мы гарантируем высокое качество и уникальность каждого
            изделия.
          </p>
          <iframe
            width="100%"
            style={{ borderRadius: "28px", marginTop: "44px" }}
            height="480"
            src="https://www.youtube.com/embed/iDQre9mu2iw"
            title="Флешки оптом, собственное производство в Reklem"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

        <div className="">
          <section className={styles.vacancy}>
            <OrangeUnderline>Вакансии</OrangeUnderline>
            <section className={styles.vacancyInner}>
              <label>
                <input type="checkbox" />
                <span className={styles.paddingLeft}>Москва</span>
              </label>
              <label>
                <input type="checkbox" />
                <span className={styles.paddingLeft}>Улан-Удэ</span>
              </label>
              <label>
                <input type="checkbox" />
                <span className={styles.paddingLeft}> Удаленно</span>
              </label>
            </section>
          </section>

          <section className={styles.historyCompany}>
            <OrangeUnderline>История компании</OrangeUnderline>
            <p className={styles.miniHistoryCompany}>
              Анна, художница, и Михаил, инженер, основали «Print Your Dream» для создания
              уникальных принтов. Начав с небольшой мастерской, они быстро стали
              популярны. Запустив онлайн-платформу, компания позволила клиентам создавать
              свои дизайны. Сегодня «Print Your Dream» поддерживает художников и
              использует экологичные материалы.
            </p>
          </section>

          <div className={styles.historyInfo}>
            <section>
              <p className={styles.historyMini}>
                Коммуникабельность‚ аккуратность‚ внимательность, позитивный настрой‚
                легкая обучаемость‚ самозадачность, стрессоустойчивость.
              </p>
              <span>2002</span>
              <img
                src={require("../../components/images/aboutCompanyHistory/historyOne.png")}
                alt=""
              />
            </section>
            <section>
              <p className={styles.historyMax}>
                Независимые государства рассмотрены исключительно в разрезе маркетинговых
                и финансовых предпосылок. Внезапно, интерактивные прототипы и по сей день
                остаются уделом либералов, которые жаждут быть заблокированы в рамках
                своих собственных рациональных ограничений.
              </p>
              <span>2010</span>
              <img
                src={require("../../components/images/aboutCompanyHistory/historyTwo.png")}
                alt=""
              />
            </section>
            <section className={styles.historyCenter}>
              <p className={styles.historyMax}>
                Значимость этих проблем настолько очевидна, что базовый вектор развития
                требует определения и уточнения новых принципов формирования
                материально-технической и кадровой базы. Господа, понимание сути
                ресурсосберегающих технологий говорит о возможностях приоритизации разума
                над эмоциями.
              </p>
              <span>2017</span>
              <img
                src={require("../../components/images/aboutCompanyHistory/historyThree.png")}
                alt=""
              />
            </section>
            <section>
              <p className={styles.historyMax}>
                Идейные соображения высшего порядка, а также понимание сути
                ресурсосберегающих технологий предопределяет высокую востребованность
                направлений прогрессивного развития. Повседневная практика показывает, что
                разбавленное изрядной долей эмпатии, рациональное мышление в значительной
                степени обусловливает.
              </p>
              <span>2020</span>
              <img
                src={require("../../components/images/aboutCompanyHistory/historyFourth.png")}
                alt=""
              />
            </section>
            <section>
              <p className={styles.historyMini}>
                Как уже неоднократно упомянуто, представители современных социальных
                резервов ассоциативно распределены по отраслям.
              </p>
              <span>2021</span>
              <img
                src={require("../../components/images/aboutCompanyHistory/historyFive.png")}
                alt=""
              />
            </section>
          </div>
        </div>
      </div>
      <QuestionsFooter />
    </div>
  );
};

export default AboutCompany;
