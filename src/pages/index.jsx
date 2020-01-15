import React from "react";
import { Link } from "react-router-dom";
import SectionContainer from "@/components/SectionContainer";
import About5RubyCard from "@/components/index/about5RubyCard";
import HotClassRecommendCard from "@/components/index/hotClassRecommendCard";
import ShowCaseCard from "@/components/index/showCaseCard";
import data from "@/assets/staticData/index.json";
import ImgWrapper from "@/components/imgWrapper";
import Carousel from "@/components/carouselContainer";
export default function Index() {
  return (
    <>
      {Object.keys(data).length !== 0 ? (
        <section>
          <Carousel itemKeyClass="bannerCarousel" hasArrow={true}>
            {data.carousel.map(item => (
              <Link to={item.to} key={item.fileName}>
                <ImgWrapper fileName={item.fileName} path="index/carousel/" />
              </Link>
            ))}
          </Carousel>
          {
            <SectionContainer title={data.sections[0].title} isGrey={true}>
              {data.sections[0].cards.map(card => (
                <About5RubyCard
                  {...card}
                  cardClass="col-lg-3 col-sm-12"
                  key={card.fileName}
                />
              ))}
            </SectionContainer>
          }
          {
            <SectionContainer title={data.sections[1].title}>
              {data.sections[1].cards.map(card => (
                <HotClassRecommendCard
                  {...card}
                  cardClass="col-lg-4 col-md-6 col-sm-12 "
                  key={card.fileName}
                />
              ))}

              <div className="col-12 text-center">
                <Link
                  to="/"
                  className="d-inline-block mt-5 py-3 px-5 bg-primary text-white normal-radius font-size-4"
                >
                  看更多網頁課程
                </Link>
              </div>
            </SectionContainer>
          }
          {
            <>
              <SectionContainer title={data.sections[2].title} isGrey={true} />
              <Carousel
                hasArrow={false}
                itemKeyClass="classRecommendCarousel"
                hasContainer={true}
              >
                {data.sections[2].cards.map(item => (
                  <div key={item.fileName} className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <div className="classRecommend__img">
                          <ImgWrapper
                            fileName={item.fileName}
                            path="index/classRecommend/"
                          />
                        </div>
                        <div className="ml-5">
                          <div>{item.content}</div>
                          <div className="text-primary font-size-5 mt-3">
                            {item.authorName}
                          </div>
                          <div>{item.job}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </>
          }
          {
            <SectionContainer title={data.sections[3].title}>
              {data.sections[3].cards.map(card => (
                <ShowCaseCard
                  {...card}
                  cardClass="col-md-6 col-lg-4"
                  key={card.fileName}
                />
              ))}
              <div className="col-12 text-right">
                <Link className="text-primary" to="/">
                  ...看更多案例
                </Link>
              </div>
            </SectionContainer>
          }
          {
            <SectionContainer
              title={data.sections[4].title}
              hasTitleUnderLine={false}
            >
              <div className="col-12 text-center my-4 font-size-4 knowMore_content">
                {data.sections[4].content1}
                <br />
                {data.sections[4].content2}
              </div>
              <div className="col-12 text-center">
                <ImgWrapper
                  path="index/knowMore/"
                  imgClass="mx-4"
                  fileName="icon-fb.png"
                />
                <ImgWrapper
                  path="index/knowMore/"
                  imgClass="mx-4"
                  fileName="icon-twitter.png"
                />
              </div>
            </SectionContainer>
          }
        </section>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}
