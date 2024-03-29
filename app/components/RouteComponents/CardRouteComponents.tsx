import React from 'react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { ContentCard, FrameWorkLink } from '../library/Card'
import { SiNextdotjs, SiVite } from 'react-icons/si'

type Props = {}

const CardRouteComponents = (props: Props) => {
  return (
    <Container
        title="Card"
        description="This cards are reusable card that can be used by anyone on the web "
      >
        <Section
          title="Normal cards"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, vitae."
        >
          <ContentCard
            header="header"
            footer="footer"
            title="Card"
            subTitle="CardSubtitle"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis mollitia rerum? Nobis, explicabo quisquam?"
            link={{
              text: "click me",
              url: "https://github.com/",
            }}
          >
            {""}
          </ContentCard>
        </Section>

        <Section
          title="second section"
          description="this cards are reusable card that can be used by anyone on the web"
        >
          <ContentCard
            header="header"
            footer=""
            title="Card"
            subTitle="CardSubtitle"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis mollitia rerum? Nobis, explicabo quisquam?"
            link={{
              text: "click me",
              url: "https://github.com/",
            }}
          >
            {""}
          </ContentCard>
          <ContentCard
            header=""
            footer="footer"
            title="Card"
            subTitle="CardSubtitle"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis mollitia rerum? Nobis, explicabo quisquam?"
            link={{
              text: "click me",
              url: "https://github.com/",
            }}
          >
            {""}
          </ContentCard>
        </Section>

        <Section
          title="Framework links"
          description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem temporibus maiores!"
        >
          <FrameWorkLink text="vite" url="">
            <SiVite size={30} />
          </FrameWorkLink>
          <FrameWorkLink text="Next js" url="">
            <SiNextdotjs size={30} />
          </FrameWorkLink>
          <FrameWorkLink text="Next js" url="">
            <SiNextdotjs size={30} />
          </FrameWorkLink>
          <FrameWorkLink text="vite" url="">
            <SiVite size={30} />
          </FrameWorkLink>
        </Section>
      </Container>
  )
}

export default CardRouteComponents;