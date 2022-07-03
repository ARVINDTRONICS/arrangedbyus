import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { TextInput } from "../components/TextInput";
import { Stack, Button } from "@chakra-ui/react";
import Couple from "../assets/images/couple.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arranged By Us</title>
        <meta
          name="description"
          content="A website to check compatability match for arranged marriages in India "
        />
        <link rel="icon" href="/wedding.png" />
      </Head>

      <main className={styles.main}>
        <section className={styles.leftSection}>
          <h1>Arranged By Us !</h1>
        </section>
        <section className={styles.rightSection}>
          <div className={styles.userRegistration}>
            <Image src={Couple} alt="Couple" />
            <Stack spacing={4}>
              <TextInput
                type={"email"}
                placeholder="Enter your email address"
                label="Email Address"
                size="md"
                helpText={""}
              />{" "}
              <Button colorScheme="teal" size="lg">
                GET OTP
              </Button>
            </Stack>
          </div>
        </section>
      </main>
    </div>
  );
}
