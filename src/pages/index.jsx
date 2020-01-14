import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import SectionItemTitle from '@/components/index/sectionItemTitle'
import About5RubyCard from '@/components/index/about5RubyCard'
import HotClassRecommendCard from '@/components/index/hotClassRecommendCard'
import ShowCaseCard from '@/components/index/showCaseCard'
import data from '@/assets/staticData/index.json'

export default function Index() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  return (
    <>{
      Object.keys(data).length !== 0 ?
        <section>
          <section>

          </section>
          {
            <section className='bg-grey container-fluid pb-4'>
              <SectionItemTitle title={data.sections[0].title} />
              <div className='row justify-content-center'>
                <div className='row col-10'>
                  {data.sections[0].cards.map(card =>
                    <About5RubyCard {...card} cardClass='col-lg-3 col-sm-12' key={card.fileName} />
                  )}
                </div>
              </div>
            </section>
          }
          {
            <section className='container-fluid pb-4'>
              <SectionItemTitle title={data.sections[1].title} />
              <div className='row justify-content-center'>
                <div className='row col-10'>
                  {data.sections[1].cards.map(card =>
                    <HotClassRecommendCard {...card} cardClass='col-lg-4 col-md-6 col-sm-12 h-100per' key={card.fileName} />
                  )}
                </div>
              </div>
              <div className='text-center'>
                <Link className='mx-auto d-inline-block mt-5 py-3 px-5 bg-primary text-white normal-radius font-size-4'>
                  看更多網頁課程
                  </Link>
              </div>
            </section>
          }
          {
            <section className='bg-grey container-fluid pb-4'>
              <SectionItemTitle title={data.sections[2].title} />
            </section>
          }
          {
            <section className='container-fluid pb-4'>
              <SectionItemTitle title={data.sections[3].title} />
              <div className='row justify-content-center'>
                <div className='row col-10'>
                  {data.sections[3].cards.map(card =>
                    <ShowCaseCard {...card} cardClass='col-md-6 col-lg-4' key={card.fileName} />
                  )}
                  <div className='col-12 text-right'>
                    <Link className='text-primary'>...看更多案例</Link></div>
                </div>
              </div>
            </section>
          }
        </section> :
        <div>loading</div>
    }
    </>
  );
}



/*
<section>
        <SectionItemTitle title='熱門網頁設計課程推薦' />
        <div>
          <HotClassRecommendCard />
          <HotClassRecommendCard />
          <HotClassRecommendCard />
        </div>
        <div>
          <button>
            看更多網頁課程
          </button>
        </div>
      </section>
      <section className="classRecommend">
        <SectionItemTitle title='網頁課程推薦' />
        <div className='classRecommend__carousel'>

        </div>
      </section>
      <section className="showcase">
        <SectionItemTitle title='案例作品 Showcase' />
        <div>

        </div>
        <div>
          ....更多案例
        </div>
      </section>
      <section className="knowMore">
        <div>
          想更瞭解我們嗎？
          </div>
        <p>
          您可以看看常見問題或者直接線上洽詢，會有親切的客服人員回答您的問題，
也可以透過社群網站隨時關注我們的動態。
        </p>
        <div>
          <button>

          </button>
          <button>

          </button>
        </div>
      </section>

*/