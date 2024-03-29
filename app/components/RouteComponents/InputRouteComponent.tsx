import React from 'react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Input } from '../library/Input'

type Props = {}

const InputRouteComponent = (props: Props) => {
  return (
    <Container
        title="Input fields "
        description="This example showcases a grid-based form layout that can be adapted for various input types like text, email, password, and more."
      >
        <Section
          title="Basic"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, cumque!"
        >
          <Input type="text" placeholder="Please enter a text here" />
          <Input disabled type="text" placeholder="Please enter a text here" />
        </Section>
        <Section
          title="Email Label"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, cumque!"
        >
          <Input
            label="Email"
            name="email"
            description="enter a valid email address above"
            type="email"
            placeholder="user@example.com"
          />
        </Section>
        <Section
          title="Field"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, cumque!"
        >
          <Input
            label="Enter Password"
            name="password"
            description="Password must not be less than 10 alphanumeric characters"
            type="password"
            placeholder="Please enter your password"
          />
        </Section>
      </Container>
  )
}

export default InputRouteComponent;