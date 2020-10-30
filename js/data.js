const qnaList = [
  {
    q: '1. 귀하는 타인과의 접촉 없이 활용할 수 있는 개인 공간이 확보되어 있습니까?',
    a: [
      { answer: 'a. 있다', score: 6 },
      { answer: 'b. 없다', score: 2 },
    ]
  },
  {
    q: '2. 개인 공간이 확보되어 있다면, 귀하는 개인 공간에서 경제, 학업활동을 할 수 있습니까?',
    a: [
      { answer: 'a. 있다', score: 6 },
      { answer: 'b. 없다', score: 2 },
    ]
  },
  {
    q: '3. 귀하는 타인과의 접촉없이 이용 가능한 개인 교통수단을 소유하고 있습니까?',
    a: [
      { answer: 'a. 있다', score: 3 },
      { answer: 'b. 없다', score: 1 },
    ]
  },
  {
    q: '4. 귀하는 근무지에 나가지 않으면 근무를 할 수 없는 환경이십니까?',
    a: [
      { answer: 'a. 전혀 그렇지 않다', score: 2 },
      { answer: 'b. 그렇지 않다', score: 4 },
      { answer: 'c. 보통이다', score: 6 },
      { answer: 'd. 그렇다', score: 8 },
      { answer: 'e. 매우 그렇다', score: 10 }
    ]
  },
  {
    q: '5. 귀하는 코로나 19 이후 변화된 환경으로 인한 우울감을 느낀적이 있으십니까? ',
    a: [
      { answer: 'a. 전혀 그렇지 않다', score: 5 },
      { answer: 'b. 그렇지 않다', score: 4 },
      { answer: 'c. 보통이다', score: 3 },
      { answer: 'd. 그렇다', score: 2 },
      { answer: 'e. 매우 그렇다', score: 1 }
    ]
  },
  {
    q: '6. 코로나19 로 인해 변화된 환경으로 인한 우울감이 경제, 학업 활동에 부정적인 영향을 주었습니까?',
    a: [
      { answer: 'a. 전혀 그렇지 않다', score: 10 },
      { answer: 'b. 그렇지 않다', score: 8 },
      { answer: 'c. 보통이다', score: 6 },
      { answer: 'd. 그렇다', score: 4 },
      { answer: 'e. 매우 그렇다', score: 2 }
    ]
  },
  {
    q: '7. 귀하는 PC, 스마트 기기 등을 이용하여 문서를 작성하고 공유할 수 있습니까?',
    a: [
      { answer: 'a. 그렇다', score: 5 },
      { answer: 'b. 아니다', score: 2 }
    ]
  },
  {
    q: '8. 귀하는 원격회의나 화상회의를 통해 다른 사람과의 소통이 가능합니까?',
    a: [
      { answer: 'a. 그렇다', score: 5 },
      { answer: 'b. 아니다', score: 2 }
    ]
  },
  {
    q: '9. 귀하는 SNS(인스타그램, 블로그 등)를 활용하여 타인과 소통을 할 수 있습니까? ',
    a: [
      { answer: 'a. 그렇다', score: 5 },
      { answer: 'b. 아니다', score: 2 }
    ]
  },
  {
    q: '10. 위와 같은 디지털 활용 능력의 부족이 귀하의 학업, 경제 활동에 부정적인 영향을 주었습니까?',
    a: [
       { answer: 'a. 전혀 그렇지 않다', score: 5 },
      { answer: 'b. 그렇지 않다', score: 4 },
      { answer: 'c. 보통이다', score: 3 },
      { answer: 'd. 그렇다', score: 2 },
      { answer: 'e. 매우 그렇다', score: 1 }
    ]
  },
  {
    q: '11. 귀하는 새로운 프로그램을 사용해야 할 때 쉽게 적응할 수 있습니까? ',
    a: [
      { answer: 'a. 그렇다', score: 7 },
      { answer: 'b. 아니다', score: 2 }
    ]
  },
  {
    q: '12. 귀하는 키오스크를 문제없이 사용할 수 있습니까? ',
    a: [
      { answer: 'a. 그렇다', score: 3 },
      { answer: 'b. 아니다', score: 1 }
    ]
   },
  {
    q: '13. 귀하는 전자상거래(E-커머스, 인터넷쇼핑 등)를 문제없이 사용할 수 있습니까?',
    a: [
      { answer: 'a. 그렇다', score: 3 },
      { answer: 'b. 아니다', score: 1 }
    ]
   },
   {
    q: '14. 귀하는 인터넷 검색을 활용하여 필요한 정보를 정확하게 찾아낼 수 있습니까?',
    a: [
      { answer: 'a. 그렇다', score: 7 },
      { answer: 'b. 아니다', score: 2 }
    ]
   },
   {
    q: '15. 귀하는 온라인 상에서 사귄 지인과 좋은 관계를 유지할 수 있습니까?',
    a: [
      { answer: 'a. 그렇다', score: 5 },
      { answer: 'b. 아니다', score: 2 }
    ]
   },
  {
    q: '16. 귀하는 지인과의 관계지속에 있어서 대면 만남이 있어야 한다고 생각합니까? ',
    a: [
      { answer: 'a. 그렇다', score: 2 },
      { answer: 'b. 아니다', score: 5 }
    ]
   },
  {
    q: '17. 코로나 19로 인해 변화된 상황으로 인한 인간 관계 유지의 어려움으로 경제, 학업활동에 지장이 있었다고 생각합니까?  ',
    a: [
      { answer: 'a. 전혀 그렇지 않다', score: 10 },
      { answer: 'b. 그렇지 않다', score: 8 },
      { answer: 'c. 보통이다', score: 6 },
      { answer: 'd. 그렇다', score: 4 },
      { answer: 'e. 매우 그렇다', score: 2 }
    ]
   }
]

const infoList = [
  {
    from: 0,
    to: 20,
    mLeft: '20%',
    name: '매우 낮은편',
    desc: '언택트 지수가 매우 낮은 편입니다. 언택트 사회에서 살아가기 위한 역량 개발이 필요합니다.'
  },
  {
    from: 21,
    to: 40,
    mLeft: '40%',
    name: '낮은편',
    desc: '언택트 지수가 낮은 편입니다. 언택트 사회에서 살아가기 위한 역량 강화가 필요합니다.'
  },
  {
    from: 41,
    to: 60,
    mLeft: '60%',
    name: '보통',
    desc: '언택트 사회에서 살아가기 위한 능력이 적당히 갖추어져 있습니다. 경쟁력을 가지기 위해 조금 더 노력하면 좋을 것 같습니다.'
  },
  {
    from: 61,
    to: 80,
    mLeft: 80%',
    name: '높은편',
    desc: '언택트 사회에서 어려움없이 살아갈 수 있습니다. '
  },
  {
    from: 81,
    to: 100,
    mLeft: '90%',
    name: '매우 높은편',
    desc: '언택트 사회에 딱 맞는 훌륭한 인재입니다!'
  }
]
