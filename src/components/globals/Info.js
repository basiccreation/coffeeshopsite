import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center" />

          <p className="lead text-muted mb-5">
            Have a lot of grump in yourself because you can't forget to be
            grumpy and not be like king grumpy cat jump around on couch, meow
            constantly until given food, i am the best but jump off balcony,
            onto stranger's head or meow meow mama reward the chosen human with
            a slow blink. Furrier and even more furrier hairball pose purrfectly
            to show my beauty yet where is my slave? I'm getting hungry climb a
            tree, wait for a fireman jump to fireman then scratch his face for
            hide at bottom of staircase to trip human. Purr while eating the
            door is opening! how exciting oh, it's you, meh
          </p>
          <p className="lead text-muted mb-5">
            Please stop looking at your phone and pet me pet me pet me don't pet
            me pooping rainbow while flying in a toasted bread costume in space
            chase red laser dot, but eat the fat cats food, or cough furball
            into food bowl then scratch owner for a new one. Sniff other cat's
            butt and hang jaw half open thereafter chill on the couch table.
            Ignore the human until she needs to get up, then climb on her lap
            and sprawl claws in your leg for when owners are asleep, cry for no
            apparent reason, meow to be let in lick the curtain just to be
            annoying.
          </p>
          <Link to="/about/">
            <button className="btn  text-uppercase btn-yellow">
              about page
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
