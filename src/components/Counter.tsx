import { createSignal, type Component, type JSX } from "solid-js"

interface IProps {
  initValue: number
  children?: JSX.Element
}

export const Counter : Component<IProps> = ( props ) => {

  const [ counter, setCounter ] = createSignal( props.initValue )

  const increment = () => setCounter( prev => ++prev )
  const decrement = () => {
    if ( counter() === 0 ) return
    setCounter( prev => --prev )
  }
  const reset = () => setCounter( props.initValue )

  return (
    <div class="flex flex-col gap-8 justify-center items-center">

      { props.children }

      <h3 class="text-3xl font-bold"> Value: { counter() } 🐈 </h3>
      <div class="flex gap-4 justify-center">
        <button
          onClick={ increment }
          class="px-4 py-2 bg-green-500 text-white font-semibold rounded-full"
        > +1 </button>
        <button
          onClick={ reset }
          class="px-4 py-2 bg-yellow-500 text-gray-800 fontlsemibold rounded-xl"
        > Reset </button>
        <button
          onClick={ decrement }
          class="px-4 py-2 bg-red-500 text-white font-semibold rounded-full"
        > -1 </button>
      </div>
    </div>
  )
}
