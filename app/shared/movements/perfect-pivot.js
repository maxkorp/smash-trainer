const rtlFrames = [];
const ltrFrames = [];

for (let i = 0; i < 60; i++) {
  if (i < 3) {
    rtlFrames.push({x: '128px', y: '0'});
    ltrFrames.push({x: '-128px', y: '0'});
  }
  else if (i === 4) {
    rtlFrames.push({x: '-128px', y: '0'});
    ltrFrames.push({x: '128px', y: '0'});
  }
  else {
    rtlFrames.push({x: '0', y: '0'});
    ltrFrames.push({x: '0', y: '0'});
  }
}

module.exports.perfectPivotRightToLeft = {
  name: 'Perfect Pivot (Right to Left)',
  rtlFrames
};

module.exports.perfectPivotLeftToRight = {
  name: 'Perfect Pivot (Left to Right)',
  ltrFrames
};
