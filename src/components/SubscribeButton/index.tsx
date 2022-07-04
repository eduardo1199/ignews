import { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
/* import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js"; */
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { status} = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (status !== "authenticated") {
      signIn("github");
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;
      
      const stripe = await getStripeJs();

      await stripe?.redirectToCheckout({ sessionId });
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}