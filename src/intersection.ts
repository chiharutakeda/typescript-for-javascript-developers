export {};

type Pitcher1 = {
  throwingspeed: number;
};

type Batter1 = {
  battingaberage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingspeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingaberage: 0.367,
};

// type TwoWayPlayer = {
//   throwingspeed: number;
//   battingaberage: 0.367;
// };

//型を合成できる（必須の技術）
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingspeed: 165,
  battingaberage: 0.367,
};
