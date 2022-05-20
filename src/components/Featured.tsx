/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive GamePlay',
    description:
      'Join the lobby and choose to play one game or up to 10 exciting games per round and claim your place in history in the world’s first ever massive multiplayer online total skill-based game (MMOSBG).',
    icon: GlobeAltIcon
  },
  {
    name: 'Free to Learn',
    description:
      'A gaming experience to test yourself against the rest or possibly against your biggest rival.. you.',
    icon: ScaleIcon
  },
  {
    name: 'Play 2 Earn',
    description:
      'This is a new era of e-sports as you wager your skills against others at your level to earn items, stable coins, crypto currency, nfts and more. ',
    icon: LightningBoltIcon
  },
  {
    name: 'Build Your Character',
    description:
      ' Place on the leader board with a winning position and represent yourself on the podium with beautifully customisable avatars, gear, pets, titles and much more as the others try and workout where they went wrong.',
    icon: AnnotationIcon
  }
]

export default function Featured() {
  return (
    <div className="py-12 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-extrabold tracking-tight leading-8 text-gray-900 sm:text-4xl">
            A better way to test your skills and PLAY 2 EARN
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Just about anyone can play as each game only takes a few minutes to
            learn but a whole lot more to master.Unlock bonus levels and mystery
            features that can go either way as you compete with yourself or 10,
            100 and even up to 1,000 simultaneous players as the clock counts
            down to Victory or Shame.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="flex absolute justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
