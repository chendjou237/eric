import React from 'react'
import PocketBase from 'pocketbase'
export default function Hero() {
  const pb = new PocketBase("http://127.0.0.1:8090")
  const collectionName = pb.authStore.model.collectionName
  const name = pb.authStore.model.username
  return (
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello {collectionName} {name }</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
