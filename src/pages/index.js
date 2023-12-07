import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

export default function Home() {
  return (
    <>
  <Segment>
  
  <Image
    alt='banner'
    src='doggo.jpg'
  />
  <h2>Type a breed in the search, and take a look!</h2>
</Segment>
  </>
)
}
