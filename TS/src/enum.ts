enum Membership {
    Simple,
    Standart,
    Premium,
}

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM',
}

const membership = Membership.Standart
const reverseMembership = Membership[2]
console.log(membership)
console.log(reverseMembership)

const social = SocialMedia.INSTAGRAM
console.log(social)