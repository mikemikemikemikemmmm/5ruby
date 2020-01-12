import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useGetJson from '@/utils/useGetJson'
import SectionItemTitle from '@/components/index/sectionItemTitle'
import About5RubyCard from '@/components/index/about5RubyCard'
import HotClassRecommendCard from '@/components/index/hotClassRecommendCard'
import data from '@/assets/staticData/index.json'

export default function Index() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  return (
    <>{
      data ?
        <>
          <section className=""></section>
          {
            <section>
              <SectionItemTitle title={data.sections[0].title} />
              <div>
                {data.sections[0].cards.map(card =>
                  <About5RubyCard {...card} key={card.imgSrc} />
                )}
              </div>
            </section>
          }

        </> :
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