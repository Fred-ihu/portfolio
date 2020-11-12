import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container ">
        <section className="has-text-centered mt-5">
          <h1 className="is-size-2 has-text-weight-bold">
            Fred Ihuel, Développeur Front-End & Graphiste
          </h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <Image
            src="/undraw_creative_thinking_b3bc.svg"
            alt="a definir"
            height={400}
            width={400}
            className="mt-5"
          />
        </section>
      </div>
      <section class="hero is-primary has-negative-margin-top">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">Primary title</h1>
            <h2 class="subtitle">Primary subtitle</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non condimentum erat. Quisque a sem quis massa ullamcorper
              lobortis ut nec velit. Nulla vulputate facilisis rutrum. Aenean
              commodo lacus nunc, quis mollis ligula pellentesque in. Integer
              quis justo finibus, dictum erat ut, interdum ipsum. Ut iaculis
              aliquet ex, vitae feugiat nisi dignissim nec. Curabitur vitae urna
              vestibulum, porttitor metus nec, iaculis metus. Phasellus sit amet
              tortor consequat, interdum dolor et, efficitur tortor. Nullam
              venenatis tincidunt viverra. In vitae blandit elit, sed bibendum
              libero. Mauris tempor dolor vitae pellentesque pulvinar. Nulla
              ornare, massa at pellentesque vehicula, odio orci congue arcu, a
              imperdiet neque dolor vitae sapien. Aenean nibh justo, vulputate a
              eros gravida, vulputate luctus augue. Proin in eros non mauris
              luctus sollicitudin. Morbi maximus tellus viverra, gravida quam
              et, lacinia dui. Donec at sagittis libero. Aliquam vitae ipsum
              posuere, scelerisque turpis eu, dignissim enim. In non blandit
              metus, vel sodales ligula. Etiam euismod facilisis dui sed mollis.
              Ut dignissim dui vel ligula pellentesque, eu aliquam neque
              aliquet. Proin metus sapien, tempor vel sollicitudin sit amet,
              maximus sit amet sem. Donec vitae nibh non ante imperdiet mollis a
              sit amet risus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris ut fermentum
              eros, sit amet vestibulum mauris.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
