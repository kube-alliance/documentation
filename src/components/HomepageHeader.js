import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import { Dots } from "@site/src/components/Dots";
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
  Space,
} from "@mantine/core";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const useStyles = createStyles((theme) => {
    return {
      wrapper: {
        position: "relative",
        paddingTop: rem(120),
        paddingBottom: rem(80),

        [theme.fn.smallerThan("sm")]: {
          paddingTop: rem(80),
          paddingBottom: rem(60),
        },
      },

      inner: {
        position: "relative",
        zIndex: 1,
      },

      dots: {
        position: "absolute",
        color: isDarkMode ? theme.colors.dark[5] : theme.colors.gray[1],

        [theme.fn.smallerThan("sm")]: {
          display: "none",
        },
      },

      dotsLeft: {
        left: 0,
        top: 0,
      },

      title: {
        textAlign: "center",
        fontWeight: 800,
        fontSize: rem(40),
        letterSpacing: -1,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan("xs")]: {
          fontSize: rem(28),
          textAlign: "left",
        },
      },

      highlight: {
        color: theme.colors[theme.primaryColor][isDarkMode ? 4 : 6],
      },

      description: {
        textAlign: "center",

        [theme.fn.smallerThan("xs")]: {
          textAlign: "left",
          fontSize: theme.fontSizes.md,
        },
      },

      controls: {
        marginTop: theme.spacing.lg,
        display: "flex",
        justifyContent: "center",

        [theme.fn.smallerThan("xs")]: {
          flexDirection: "column",
        },
      },

      control: {
        "&:not(:first-of-type)": {
          marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan("xs")]: {
          height: rem(42),
          fontSize: theme.fontSizes.md,

          "&:not(:first-of-type)": {
            marginTop: theme.spacing.md,
            marginLeft: 0,
          },
        },
      },
    };
  });

  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Enterprise-grade{" "}
          <Text component="span" className={classes.highlight} inherit>
            Kubernetes
          </Text>{" "}
          without breaking the bank
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Simplify your Kubernetes hosting experience. We take care of the
            infrastructure so you don't have to.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Link to="https://console.kubinity.com">
            <Button
              className={classes.control}
              size="lg"
              variant="default"
              color="gray"
            >
              Open Console
            </Button>
          </Link>
          <Space mr={12} mt={12}></Space>
          <Link to="/docs/getting-started">
            <Button className={classes.control} size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default HomepageHeader;
