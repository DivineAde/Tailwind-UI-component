import React from 'react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Button } from '../library/Button'

type Props = {}

const ButtonRouteComponent = (props: Props) => {
  return (
    <Container
        title="Button"
        description="The Element Button, a fundamental component in web design, serves as a versatile and customizable clickable interface element, facilitating user interaction and navigation while prioritizing accessibility and contributing to the visual hierarchy of a webpage."
      >
        <Section
          title="primary"
          description="The Primary button class commands attention with bold styling and vibrant colors, guiding users towards essential actions or main tasks."
        >
          <Button colors={{}}>Default Primary</Button>
          <Button disabled>Default Primary</Button>
          <Button
            colors={{
              bg: "bg-amber-500",
              hoverBg: "hover:bg-amber-600",
              focusRing: "focus:ring-amber-600",
            }}
          >
            Amber
          </Button>
          <Button
            colors={{
              bg: "bg-blue-500",
              hoverBg: "hover:bg-blue-600",
              focusRing: "focus:ring-blue-500",
            }}
          >
            Blue
          </Button>
          <Button
            colors={{
              bg: "bg-red-500",
              hoverBg: "hover:bg-red-600",
              focusRing: "focus:ring-red-600",
            }}
          >
            {" "}
            Red
          </Button>
          <Button
            colors={{
              bg: "bg-yellow-500",
              hoverBg: "hover:bg-yellow-600",
              focusRing: "focus:ring-yellow-600",
            }}
          >
            {" "}
            Yellow
          </Button>
          <Button
            colors={{
              bg: "bg-purple-500",
              hoverBg: "hover:bg-purple-600",
              focusRing: "focus:ring-purple-600",
            }}
          >
            {" "}
            Purple
          </Button>
          <Button
            colors={{
              bg: "bg-pink-500",
              hoverBg: "hover:bg-pink-600",
              focusRing: "focus:ring-pink-600",
            }}
          >
            {" "}
            pink
          </Button>
          <Button
            colors={{
              bg: "bg-cyan-500",
              hoverBg: "hover:bg-cyan-600",
              focusRing: "focus:ring-cyan-600",
            }}
          >
            {" "}
            cyan
          </Button>
          <Button
            colors={{
              bg: "bg-lime-500",
              hoverBg: "hover:bg-lime-600",
              focusRing: "focus:ring-lime-600",
            }}
          >
            {" "}
            Lime
          </Button>
        </Section>

        <Section
          title="secondary"
          description="The Secondary button class offers alternative actions with muted tones, supporting primary objectives without overwhelming the interface"
        >
          <Button varient="secondary">Default secondary</Button>
          <Button varient="secondary" disabled>
            secondary
          </Button>
          <Button
            varient="secondary"
            colors={{
              text: "text-amber-500",
              hoverBorder: "hover:border-amber-600",
              hoverBg: "hover:bg-amber-500",
              focusRing: "focus:ring-amber-600",
              border: "border-amber-500",
            }}
          >
            amber
          </Button>
          <Button
            varient="secondary"
            colors={{
              text: "text-red-500",
              hoverBorder: "hover:border-red-600",
              hoverBg: "hover:bg-red-500",
              focusRing: "focus:ring-red-600",
              border: "border-red-500",
            }}
          >
            red
          </Button>
          <Button
            varient="secondary"
            colors={{
              text: "text-green-500",
              hoverBorder: "hover:border-green-600",
              hoverBg: "hover:bg-green-500",
              focusRing: "focus:ring-green-600",
              border: "border-green-500",
            }}
          >
            green
          </Button>
          <Button
            varient="secondary"
            colors={{
              text: "text-yellow-500",
              hoverBorder: "hover:border-yellow-600",
              hoverBg: "hover:bg-yellow-500",
              focusRing: "focus:ring-yellow-600",
              border: "border-yellow-500",
            }}
          >
            yellow
          </Button>
          <Button
            varient="secondary"
            colors={{
              text: "text-purple-500",
              hoverBorder: "hover:border-purple-600",
              hoverBg: "hover:bg-purple-500",
              focusRing: "focus:ring-purple-600",
              border: "border-purple-500",
            }}
          >
            purple
          </Button>
          <Button
            varient="secondary"
            colors={{
              text: "text-pink-500",
              hoverBorder: "hover:border-pink-600",
              hoverBg: "hover:bg-pink-500",
              focusRing: "focus:ring-pink-600",
              border: "border-pink-500",
            }}
          >
            pink
          </Button>
        </Section>

        <Section
          title="tertiary"
          description="The Tertiary button class presents non-intrusive options with minimalist design, seamlessly integrating supplementary functionalities into the interface."
        >
          <Button varient="tertiary">Default Tertiary</Button>
          <Button varient="tertiary" disabled>
            Tertiary
          </Button>
          <Button
            varient="tertiary"
            colors={{
              text: "text-amber-500",
              hoverText: "hover:text-amber-600",
              hoverBg: "hover:bg-amber-600",
              focusRing: "focus:ring-amber-600",
            }}
          >
            Amber
          </Button>
          <Button
            varient="tertiary"
            colors={{
              text: "text-blue-500",
              hoverText: "hover:text-blue-600",
              hoverBg: "hover:bg-blue-600",
              focusRing: "focus:ring-blue-600",
            }}
          >
            blue
          </Button>
          <Button
            varient="tertiary"
            colors={{
              text: "text-red-500",
              hoverText: "hover:text-red-600",
              hoverBg: "hover:bg-red-600",
              focusRing: "focus:ring-red-600",
            }}
          >
            red
          </Button>
          <Button
            varient="tertiary"
            colors={{
              text: "text-green-500",
              hoverText: "hover:text-green-600",
              hoverBg: "hover:bg-green-600",
              focusRing: "focus:ring-green-600",
            }}
          >
            green
          </Button>
          <Button
            varient="tertiary"
            colors={{
              text: "text-yellow-500",
              hoverText: "hover:text-yellow-600",
              hoverBg: "hover:bg-yellow-600",
              focusRing: "focus:ring-yellow-600",
            }}
          >
            yellow
          </Button>
          <Button
            varient="tertiary"
            colors={{
              text: "text-purple-500",
              hoverText: "hover:text-purple-600",
              hoverBg: "hover:bg-purple-600",
              focusRing: "focus:ring-purple-600",
            }}
          >
            purple
          </Button>
        </Section>

        <Section
          title="destructive"
          description="The desstructive button class presents non-intrusive options with minimalist design, seamlessly integrating supplementary functionalities into the interface."
        >
          <Button varient="destructive">Destructive</Button>
          <Button
            varient="destructive"
            colors={{
              text: "text-red-500",
              hoverBorder: "hover:border-red-500",
              bg: "bg-transparent",
              hoverBg: "hover:bg-red-500",
              focusRing: "focus:ring-red-500",
            }}
          >
            This is destructive do not click me!
          </Button>
          <Button
            varient="destructive"
            colors={{
              text: "text-red-500",
              hoverBorder: "hover:border-red-600",
              bg: "bg-transparent",
              hoverBg: "hover:bg-red-600",
              focusRing: "focus:ring-red-600",
            }}
          >
            Unsubscribe
          </Button>
        </Section>
      </Container>
  )
}

export default ButtonRouteComponent;