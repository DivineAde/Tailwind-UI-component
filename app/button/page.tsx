"use client"

import React from 'react'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/library/Button'
import { Layout } from '../components/ui/Layout'
import ButtonRouteComponent from '../components/RouteComponents/ButtonRouteComponent'
import { usePathname } from 'next/navigation'

type Props = {}

const ButtonRoute = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <Layout>
      <ButtonRouteComponent />
    </Layout>
  )
}

export default ButtonRoute;