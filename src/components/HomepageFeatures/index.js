import React from "react";
import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import {
  IconGauge,
  IconCloudComputing,
  IconChartArrowsVertical,
  IconHammer,
} from "@tabler/icons-react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";

const featureElements = [
  {
    title: "High Availability",
    description:
      "Our clusters are built to be resiliant out of the box, without paying extra",
    icon: IconCloudComputing,
  },
  {
    title: "Scale with confidence",
    description:
      "Kubinity is designed to easily handle growing workloads. You can scale up or down with ease, and only pay for what you use",
    icon: IconGauge,
  },
  {
    title: "Easy Tooling",
    description:
      "Ready to use interfaces for common tasks. Storage, Networking and DNS are neatly abstracted away",
    icon: IconHammer,
  },
];

export default function FeaturesCards() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useColorMode();

  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,

      [theme.fn.smallerThan("sm")]: {
        fontSize: rem(24),
      },
    },

    description: {
      maxWidth: 600,
      margin: "auto",

      "&::after": {
        content: '""',
        display: "block",
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    card: {
      background: isDarkTheme ? theme.colors.dark[5] : theme.colors.gray[1],
      border: `${rem(1)} solid ${
        isDarkTheme ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },

    cardTitle: {
      color: isDarkTheme ? "white" : "black",
      "&::after": {
        content: '""',
        display: "block",
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));

  const { classes, theme } = useStyles();
  const features = featureElements.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        All the tools you need to deploy your application
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Kubinity levereges the concept of namespaces in a shared cluster. You
        get all the benefits of managed Kubernetes for a fraction of the price.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
