import { Container, Text, Button, Group } from '@mantine/core';
import classes from './styles/HomePage.module.css';
import Link from "next/link"
export default function Page() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          {' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            BELLA
          </Text>{' '}
            , a general fitness & nutrition provider
        </h1>

        <Text className={classes.description} color="dimmed">
            With the rate increasing of people in the world, BELLA aim to act as an educator providng general
            fitness tips through workout routines and meal plans.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            <Link href="/product">Try it out</Link>
          </Button>

        </Group>
      </Container>
    </div>
  );
}