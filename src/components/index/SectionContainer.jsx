export default function SectionContainer(props) {
  return (
    <section className={`container-fluid pb-4 ${prop.isGrey ? 'bg-grey' : null}`}>
      <SectionItemTitle title={props.title} />
      <div className='row justify-content-center'>
        <div className='row col-10'>
          {props.children}
        </div>
      </div>
    </section>
  )
}