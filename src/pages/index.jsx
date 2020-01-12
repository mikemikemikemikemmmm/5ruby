import React from 'react';
import IndexSectionItemTitle from '@/components/indexSectionItemTitle'

export default function Index() {
  return (
    <>
      <section className=""></section>
      <section className="about5Ruby">
        <IndexSectionItemTitle title='關於五倍紅寶石 About 5xRuby' />
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className='hotClassRecommend'>
        <IndexSectionItemTitle title='熱門網頁設計課程推薦' />
      </section>
      <section className="classRecommend">
        <IndexSectionItemTitle title='網頁課程推薦' />
      </section>
      <section className="showcase">
        <IndexSectionItemTitle title='案例作品 Showcase' />
      </section>
      <section className="knowMore">
        <IndexSectionItemTitle title='想更瞭解我們嗎？' />
      </section>
    </>
  );
}
