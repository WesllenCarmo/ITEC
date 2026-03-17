import React from 'react'
import CardChip from '../../assets/CardChip.png'

const Program = () => {
  return (
    <div className='w-full h-screen flex justify-around items-center flex-wrap'>
      <section className='flex flex-col gap-6 text-2xl w-2xl px-8 py-8 rounded-3xl bg-custom-dark-blue text-custom-white'>
        <h3 className='text-5xl self-end'>Student Card</h3>
        <img className='w-25' src={CardChip}/>
        <h2 className='text-4xl'>0000 0000 0000 0000 0000</h2>
        <div className='flex justify-between'>
          <p>No name informed</p>
          <p>-- / --</p>
        </div>
      </section>
      <form className='flex flex-col'>
        <div className='flex flex-col'>
          <label htmlFor="name">Your full name:</label>
          <input
            type='text'
            name='name'
          />
          <label htmlFor="card-number">Your card number:</label>
          <input
            type='number'
            name='card-number'
          />
          <label htmlFor="expiring-date">Expiring date:</label>
          <input
            type='date'
            name='expiring-date'
          />
        </div>
        <div>
          <button>Validate</button>
        </div>
      </form>
    </div>
  )
}

export default Program