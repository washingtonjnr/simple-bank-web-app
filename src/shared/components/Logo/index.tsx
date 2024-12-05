type LogoProps = {
  color?: string;
  className?: string;
};

export function Logo({ className, color = "#d61f0a" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="225.7821457821458 201.31859131859136 67.36281736281734 67.36281736281734"
      width="100%"
      height="100%"
      style={{ maxWidth: 90, maxHeight: 90 }}
      className={className}
    >
      <path
        d="M291.65514,244.93847c-4.79008,1.55583 -10.06105,3.68685 -15.94492,6.33648c-22.3938,10.08377 -34.22736,-1.36112 -34.40539,-1.54414c7.05461,7.66526 25.80767,15.70598 44.64559,6.0702c-1.867,2.37618 -4.03573,4.48834 -6.46849,6.28933c-11.92805,2.74392 -19.48091,-0.15087 -19.48091,-0.15087c2.95137,1.61241 7.84516,3.33797 14.91713,2.98908c-4.62978,2.39504 -9.88189,3.75286 -15.4546,3.75286c-18.60398,0 -33.68141,-15.07743 -33.68141,-33.68141c0,-18.60398 15.07743,-33.68141 33.68141,-33.68141c18.60398,0 33.68141,15.07743 33.68141,33.68141c0,3.46055 -0.51861,6.79851 -1.48983,9.93847zM258.04917,208.53199c-12.43723,0 -22.52656,10.09876 -22.52656,22.53599c0,12.44666 10.08934,22.53599 22.52656,22.55485c4.53549,0 8.75981,-1.33896 12.29579,-3.65856c-2.14045,0.7732 -4.46005,1.20695 -6.88338,1.20695c-11.09827,0 -20.09381,-8.99554 -20.09381,-20.09381c0,-11.09827 8.99554,-20.09381 20.09381,-20.09381c2.42333,0 4.74293,0.42432 6.88338,1.20695c-3.53598,-2.3196 -7.7603,-3.65856 -12.29579,-3.65856zM277.01146,239.37519c1.7067,-2.59305 2.68735,-5.69529 2.68735,-9.02383c0,-9.12755 -7.41142,-16.53897 -16.5484,-16.53897c-9.14641,0 -16.5484,7.40199 -16.5484,16.53897c0,3.32854 0.98064,6.43077 2.68735,9.02383c-0.56576,-1.57469 -0.88635,-3.28139 -0.88635,-5.0541c0,-8.1469 6.6005,-14.7474 14.7474,-14.7474c8.1469,0 14.7474,6.6005 14.7474,14.7474c0,1.78213 -0.31117,3.47941 -0.88635,5.0541z"
        style={{ fill: color }}
      ></path>
    </svg>
  );
}