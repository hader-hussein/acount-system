const employees = [{
  ID: 1,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"

},
{
  ID: 2,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"
},
{
  ID: 3,
  "Title": "California",
  "Position": "CEO",
  "State": "State1",
  "State1": "State1",
  "State2": "State2",
  "State3": "State3",
  "State4": "State4",
  "State5": "State5",
  "State6": "State6",
  "State7": "State7",
  "State8": "الحالة 8"
},
{
  ID: 4,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"
},
{
  ID: 5,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"
},
{
  ID: 6,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"
},
{
  ID: 7,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"
},
{
  ID: 8,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"
},
{
  ID: 9,
  "Title": "California",
    "Position": "CEO",
    "State": "State1",
    "State1": "State1",
    "State2": "State2",
    "State3": "State3",
    "State4": "State4",
    "State5": "State5",
    "State6": "State6",
    "State7": "State7",
    "State8": "الحالة 8"
}];
const generateData = function (rowCount, columnCount) {
  let i; let
    j;
  const items = [];

  for (i = 0; i < rowCount; i += 1) {
    const item = {};
    for (j = 0; j < columnCount; j += 1) {
      item[`field${j + 1}`] = `${i + 1}-${j + 1}`;
    }
    items.push(item);
  }
  return items;
};
