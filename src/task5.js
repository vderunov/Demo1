export default function luckyTicketCounting(initialObject) {
  let easyWayCount = 0;
  let hardWayCount = 0;
  let ticketStr;

  const { min, max } = initialObject;

  for (let i = min; i <= max; i++) {
    ticketStr = String(i).padStart(6, '0');

    if (findTicketsEasyWay(ticketStr)) {
      easyWayCount += 1;
    }

    if (findTicketsHardWay(ticketStr)) {
      hardWayCount += 1;
    }
  }

  if (easyWayCount > hardWayCount) {
    return {
      winner: 'Winner: Easy way to count',
      easy: easyWayCount,
      hard: hardWayCount,
    };
  }
  return {
    winner: 'Winner: Hard way to count',
    easy: easyWayCount,
    hard: hardWayCount,
  };
}

function findTicketsEasyWay(ticketStr) {
  let firstThreeDigits = 0;
  let lastThreeDigits = 0;

  firstThreeDigits += Number(ticketStr[0]);
  firstThreeDigits += Number(ticketStr[1]);
  firstThreeDigits += Number(ticketStr[2]);

  lastThreeDigits += Number(ticketStr[3]);
  lastThreeDigits += Number(ticketStr[4]);
  lastThreeDigits += Number(ticketStr[5]);

  return firstThreeDigits === lastThreeDigits;
}

function findTicketsHardWay(ticketStr) {
  let firstThreeDigits = 0;
  let lastThreeDigits = 0;

  firstThreeDigits += Number(ticketStr[0]);
  firstThreeDigits += Number(ticketStr[2]);
  firstThreeDigits += Number(ticketStr[4]);

  lastThreeDigits += Number(ticketStr[1]);
  lastThreeDigits += Number(ticketStr[3]);
  lastThreeDigits += Number(ticketStr[5]);

  return firstThreeDigits === lastThreeDigits;
}
