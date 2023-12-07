import React from 'react';
import { useRouter } from 'next/router';

export default function Dog() {
    const router = useRouter();

    // console.log(router.query);
    return (
        <>
        <h1>Here's The Results for '{router.query.name}.'</h1>
        </>
    )
}