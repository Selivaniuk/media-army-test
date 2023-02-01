import { SVGProps } from "react";

export type SVG = SVGProps<SVGSVGElement>;

const Square: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_905)">
        <path
          d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_905">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Menu: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="36"
      height="24"
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H27M3 6H33M3 18H33"
        stroke="currentColor"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
const Close: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_908)">
        <path
          d="M20 4L4 20M4 4L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_908">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const CircleCheck: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_1825)">
        <path
          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_39_1825">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Instagram: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_92_2522)">
        <path
          d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_2522">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Twitter: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_92_2533)">
        <path
          d="M22 4.01001C21 4.50001 20.02 4.69901 19 5.00001C17.879 3.73501 16.217 3.66501 14.62 4.26301C13.023 4.86101 11.977 6.32301 12 8.00001V9.00001C8.755 9.08301 5.865 7.60501 4 5.00001C4 5.00001 -0.182 12.433 8 16C6.128 17.247 4.261 18.088 2 18C5.308 19.803 8.913 20.423 12.034 19.517C15.614 18.477 18.556 15.794 19.685 11.775C20.0218 10.5527 20.189 9.28987 20.182 8.02201C20.18 7.77301 21.692 5.25001 22 4.00901V4.01001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_2533">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Youtube: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_92_2542)">
        <path
          d="M17 5H7C4.79086 5 3 6.79086 3 9V15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15V9C21 6.79086 19.2091 5 17 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 9L15 12L10 15V9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_2542">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const VK: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_28_813)">
        <path
          d="M11.2517 14.1644V7.38428H12.1524V10.8253V11.9386L13.2594 11.8195C14.4672 11.6896 15.5825 10.9635 16.4438 10.0565C17.1496 9.3132 17.7471 8.38535 18.141 7.38428H19.0126C18.3225 9.17751 16.9185 10.5163 15.8786 11.1175L14.2208 12.076L15.9547 12.8887C17.0028 13.3801 18.6201 14.5645 19.5729 16.616H18.4982C17.5829 14.5011 15.7167 12.8525 13.2514 12.6072L12.1524 12.4978V13.6023V16.5985C9.64626 16.4614 7.74083 15.5248 6.40807 13.9782C5.0945 12.4538 4.25748 10.2433 4.04736 7.38428H5.12707C5.4899 12.1573 7.77055 14.5749 10.0092 15.1346L11.2517 15.4452V14.1644Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_28_813">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Security: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0.924316L3 4.48732V12.06C3.00293 13.9903 3.51243 15.8861 4.47759 17.5578C5.44275 19.2295 6.82976 20.6186 8.5 21.5863L12 23.6064L15.5 21.5859C17.1702 20.6183 18.5572 19.2292 19.5223 17.5576C20.4875 15.8859 20.997 13.9903 21 12.06V4.48732L12 0.924316ZM20 12.06C19.9973 13.8148 19.5341 15.5382 18.6567 17.0579C17.7793 18.5775 16.5184 19.8403 15 20.72L12 22.4519L9 20.72C7.48161 19.8403 6.2207 18.5776 5.34328 17.0579C4.46586 15.5382 4.00267 13.8148 4 12.06V5.16692L12 2.00002L20 5.16712V12.06ZM9.0186 10.3685L8.3115 11.0755L11.3975 14.1614L15.876 9.68392L15.1689 8.97692L11.3975 12.7474L9.0186 10.3685Z"
        fill="currentColor"
      />
    </svg>
  );
};
const VehiclesCar: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6592 4.99395L23.8821 4.11565C23.7998 3.7248 23.6589 3.34865 23.4641 2.99995C23.2596 2.65683 23.0044 2.34665 22.707 2.07995L21.335 2.69995L21.3242 2.69385L21.1753 1.19575C20.4137 0.93475 19.5869 0.93475 18.8253 1.19575L18.6758 2.69395L18.665 2.69995L17.293 2.07995C16.9957 2.34669 16.7404 2.65686 16.5359 2.99995C16.3411 3.34861 16.2002 3.72473 16.1179 4.11555L17.3408 4.99385V5.00595L16.1179 5.88425C16.2002 6.27509 16.3411 6.65124 16.5359 6.99995C16.7404 7.34304 16.9957 7.65321 17.293 7.91995L18.665 7.29995L18.6758 7.30595L18.8247 8.80415C19.5863 9.06515 20.4131 9.06515 21.1747 8.80415L21.3239 7.30605L21.335 7.29995L22.707 7.91995C23.0043 7.65318 23.2595 7.34301 23.4641 6.99995C23.6589 6.65132 23.7998 6.27523 23.8821 5.88445L22.6592 5.00595V4.99395ZM23.0164 6.18595C22.909 6.49107 22.7458 6.77359 22.5352 7.01915L21.6436 6.61645L21.2836 6.46435L20.9508 6.65575L20.6166 6.84795L20.5785 7.23155L20.4814 8.20515C20.1635 8.26476 19.8373 8.26476 19.5194 8.20515L19.4223 7.23155L19.3737 6.84155L19.0391 6.64995L18.7063 6.45855L18.3563 6.61665L17.4647 7.01945C17.2541 6.77388 17.0909 6.49132 16.9835 6.18615L17.7782 5.61535L18.0907 5.37885V4.60915L17.7782 4.38465L16.9835 3.81395C17.0909 3.50878 17.2541 3.22622 17.4647 2.98065L18.3563 3.38345L18.7187 3.53635L19.0524 3.34245L19.384 3.14995L19.4219 2.76845L19.519 1.79485C19.8369 1.73538 20.1631 1.73538 20.481 1.79485L20.5781 2.76845L20.627 3.15925L20.9624 3.35125L21.2949 3.54125L21.6436 3.38365L22.5352 2.98095C22.7459 3.22646 22.909 3.50899 23.0164 3.81415L22.2217 4.38495L21.9092 4.62145V5.39085L22.2217 5.61535L23.0164 6.18595ZM20 4.24995C19.8517 4.24995 19.7067 4.29394 19.5833 4.37635C19.46 4.45876 19.3639 4.57589 19.3071 4.71294C19.2503 4.84998 19.2355 5.00078 19.2644 5.14627C19.2934 5.29175 19.3648 5.42539 19.4697 5.53028C19.5746 5.63517 19.7082 5.7066 19.8537 5.73554C19.9992 5.76448 20.15 5.74962 20.287 5.69286C20.4241 5.63609 20.5412 5.53996 20.6236 5.41663C20.706 5.29329 20.75 5.14828 20.75 4.99995C20.75 4.80104 20.671 4.61027 20.5303 4.46962C20.3897 4.32897 20.1989 4.24995 20 4.24995ZM6.36111 15.8677C6.09585 15.8678 5.83655 15.9464 5.61601 16.0938C5.39546 16.2412 5.22357 16.4507 5.12208 16.6958C5.02058 16.9408 4.99403 17.2105 5.04579 17.4707C5.09756 17.7308 5.2253 17.9698 5.41287 18.1574C5.60045 18.3449 5.83943 18.4726 6.09959 18.5244C6.35976 18.5761 6.62942 18.5496 6.87449 18.448C7.11956 18.3465 7.32902 18.1746 7.47639 17.9541C7.62375 17.7335 7.70241 17.4742 7.70241 17.2089C7.70242 17.0328 7.66774 16.8584 7.60034 16.6957C7.53293 16.5329 7.43413 16.3851 7.30958 16.2605C7.18502 16.136 7.03715 16.0372 6.87441 15.9698C6.71167 15.9024 6.53725 15.8677 6.36111 15.8677ZM6.36111 17.7501C6.25407 17.7501 6.14944 17.7184 6.06044 17.6589C5.97144 17.5995 5.90207 17.5149 5.86111 17.4161C5.82015 17.3172 5.80943 17.2083 5.83031 17.1034C5.85119 16.9984 5.90274 16.9019 5.97842 16.8263C6.05411 16.7506 6.15055 16.699 6.25553 16.6781C6.36051 16.6573 6.46933 16.668 6.56822 16.7089C6.66711 16.7499 6.75163 16.8193 6.8111 16.9083C6.87057 16.9973 6.90231 17.1019 6.90231 17.2089C6.90207 17.3524 6.84497 17.4899 6.74352 17.5913C6.64207 17.6927 6.50455 17.7498 6.36111 17.7499V17.7501ZM14.8733 15.8677C14.608 15.8677 14.3487 15.9464 14.1282 16.0937C13.9076 16.2411 13.7357 16.4506 13.6341 16.6956C13.5326 16.9407 13.506 17.2104 13.5578 17.4705C13.6095 17.7307 13.7372 17.9697 13.9248 18.1573C14.1124 18.3449 14.3513 18.4726 14.6115 18.5244C14.8717 18.5761 15.1414 18.5496 15.3864 18.4481C15.6315 18.3466 15.841 18.1747 15.9884 17.9541C16.1357 17.7335 16.2144 17.4742 16.2144 17.2089C16.2144 16.8533 16.0731 16.5122 15.8216 16.2606C15.5701 16.0091 15.229 15.8678 14.8733 15.8677ZM14.8733 17.7501C14.7663 17.7501 14.6617 17.7184 14.5727 17.6589C14.4837 17.5994 14.4143 17.5149 14.3734 17.416C14.3324 17.3171 14.3217 17.2083 14.3426 17.1033C14.3635 16.9983 14.4151 16.9019 14.4908 16.8262C14.5665 16.7505 14.6629 16.699 14.7679 16.6781C14.8728 16.6573 14.9817 16.668 15.0805 16.709C15.1794 16.7499 15.2639 16.8193 15.3234 16.9083C15.3829 16.9973 15.4146 17.1019 15.4146 17.2089C15.4144 17.3524 15.3573 17.4899 15.2558 17.5914C15.1543 17.6928 15.0168 17.7498 14.8733 17.7499V17.7501ZM17.0686 10.4339C16.9664 10.0529 16.7499 9.71228 16.4482 9.45803C16.1465 9.20378 15.7742 9.0481 15.3813 9.01195C15.3225 9.00405 15.1907 8.99995 15.13 8.99995H6.10521C6.05131 8.99995 5.92521 9.00315 5.87281 9.00945C5.47616 9.04194 5.09925 9.19626 4.79371 9.45126C4.48816 9.70627 4.26892 10.0495 4.16601 10.4339C4.03911 10.9039 3.93461 11.3788 3.83061 11.8539H1.42871V14.0893L3.34381 14.7543C3.21141 15.831 3.1369 16.9139 3.12061 17.9985C3.11821 18.1268 3.11721 18.4505 3.11721 18.5785V21.9333C3.11721 22.02 3.13428 22.1058 3.16745 22.1859C3.20062 22.266 3.24923 22.3388 3.31052 22.4C3.37181 22.4613 3.44457 22.5099 3.52464 22.5431C3.60471 22.5763 3.69054 22.5933 3.77721 22.5933H5.28811C5.37478 22.5933 5.46061 22.5763 5.54068 22.5431C5.62076 22.5099 5.69351 22.4613 5.7548 22.4C5.81609 22.3388 5.8647 22.266 5.89787 22.1859C5.93104 22.1058 5.94811 22.02 5.94811 21.9333V20.9999H15.2865V21.9336C15.2865 22.1087 15.356 22.2766 15.4798 22.4003C15.6036 22.5241 15.7715 22.5936 15.9465 22.5936H17.4575C17.6326 22.5936 17.8004 22.5241 17.9242 22.4003C18.048 22.2766 18.1175 22.1087 18.1175 21.9336V18.5786C18.1175 18.4522 18.1165 18.1306 18.1143 18.0042C18.0982 16.9177 18.0236 15.8328 17.8909 14.7542L19.806 14.0893V11.8538H17.4038C17.3 11.3788 17.1953 10.9039 17.0686 10.4339ZM3.46241 13.8426L2.32861 13.449V12.7538H3.64791C3.58001 13.1158 3.51681 13.4784 3.46241 13.8426ZM5.13131 10.6942C5.18077 10.5089 5.28632 10.3433 5.43353 10.2202C5.58073 10.0971 5.76239 10.0226 5.95361 10.0067L6.10551 9.99995H15.13C15.1617 9.99995 15.2257 10.0009 15.2652 10.0048C15.4585 10.0195 15.6426 10.0933 15.7925 10.2164C15.9423 10.3394 16.0506 10.5056 16.1026 10.6923C16.3927 11.7789 16.6202 12.8813 16.7838 13.9939H4.45071C4.6143 12.8819 4.84154 11.7802 5.13131 10.6942ZM16.2192 21.6607L16.2144 19.9999H5.02001L5.01511 21.6607H4.11721C4.11721 21.6607 4.11871 18.1224 4.12061 18.0165C4.13628 16.9838 4.20638 15.9526 4.33061 14.9272H16.9036C17.0279 15.9519 17.098 16.9825 17.1136 18.0145L17.1165 21.6607H16.2192ZM18.9058 12.7538V13.449L17.772 13.8427C17.7175 13.4785 17.6543 13.1158 17.5864 12.7538H18.9058Z"
        fill="currentColor"
      />
    </svg>
  );
};
const PeopleProfessional: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10.43C12.7582 10.43 13.4994 10.2052 14.1298 9.78396C14.7602 9.36274 15.2516 8.76402 15.5417 8.06354C15.8319 7.36306 15.9078 6.59226 15.7598 5.84864C15.6119 5.10502 15.2468 4.42196 14.7106 3.88586C14.1745 3.34975 13.4914 2.98468 12.7478 2.8368C12.0041 2.68893 11.2333 2.76489 10.5329 3.05509C9.83241 3.34529 9.23373 3.83669 8.81256 4.46714C8.39138 5.0976 8.16662 5.83879 8.1667 6.59699C8.16797 7.61322 8.57225 8.58747 9.29087 9.30603C10.0095 10.0246 10.9838 10.4288 12 10.43ZM12 3.76329C12.5604 3.76327 13.1082 3.92942 13.5741 4.24073C14.0401 4.55204 14.4033 4.99453 14.6178 5.51225C14.8322 6.02997 14.8884 6.59966 14.7791 7.14928C14.6698 7.69891 14.4 8.20378 14.0038 8.60006C13.6075 8.99634 13.1027 9.26623 12.5531 9.3756C12.0035 9.48497 11.4338 9.42891 10.916 9.2145C10.3983 9.0001 9.95575 8.63698 9.64437 8.17107C9.33299 7.70515 9.16676 7.15737 9.1667 6.59699C9.16757 5.84582 9.46636 5.12566 9.99752 4.5945C10.5287 4.06335 11.2488 3.76456 12 3.76369V3.76329ZM19.707 15.591C18.2116 14.0946 16.3105 13.0693 14.2386 12.6419L12 16.0759L9.7614 12.6423C7.68955 13.0698 5.78841 14.095 4.293 15.5914L4 15.8844V21H20V15.8844L19.707 15.591ZM19 20H5V16.3029C5.0111 16.2929 5.12 16.185 5.1312 16.175C6.31137 15.0295 7.7636 14.2033 9.3512 13.7739L10.5172 15.5372L11.5551 17.1109L12 17.783L12.45 17.105L13.4763 15.5485L14.6492 13.7739C16.2368 14.2032 17.6891 15.0295 18.8692 16.175C18.8805 16.185 18.9892 16.2928 19.0004 16.3029L19 20Z"
        fill="currentColor"
      />
    </svg>
  );
};
const FoodAndDrinks: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 21L15.1146 20H24V20.5C21.9631 20.8353 19.902 21.0025 17.8377 21H14ZM4.0054 3L4.97615 12L5.96265 11.822L5.1191 4H18.881L17.8158 13.8754C17.7931 14.0883 17.7511 14.2973 17.691 14.5L18.5574 15.0585C18.6845 14.7142 18.7699 14.3531 18.8099 13.9826L18.916 13H19.3168C20.3037 13 21.2557 12.6352 21.9899 11.9757C22.724 11.3162 23.1885 10.4086 23.2939 9.4274L23.4724 7.7674C23.5099 7.41855 23.4736 7.0657 23.3658 6.73181C23.258 6.39792 23.0811 6.09046 22.8466 5.82943C22.6122 5.5684 22.3254 5.35965 22.005 5.21675C21.6845 5.07384 21.3376 4.99999 20.9867 5H19.7789L19.9946 3H4.0054ZM19.671 6H20.9867C21.1972 6.00001 21.4053 6.04431 21.5975 6.13002C21.7898 6.21574 21.9618 6.34095 22.1025 6.49752C22.2431 6.65409 22.3493 6.83851 22.414 7.03879C22.4787 7.23907 22.5006 7.45072 22.4781 7.66L22.3 9.3206C22.222 10.057 21.8739 10.7384 21.323 11.2332C20.7721 11.7281 20.0573 12.0012 19.3168 12H19.0238L19.671 6Z"
        fill="currentColor"
      />
      <path
        d="M8.72685 21.6816C8.62321 21.6714 8.51893 21.6663 8.41439 21.6663C7.98927 21.6663 7.56839 21.7512 7.17648 21.916C7.17495 21.9167 7.17342 21.9173 7.1719 21.918C6.93465 22.0182 6.71097 22.1466 6.50548 22.2999L6.82815 22.6226L6.49507 22.9557C6.74458 22.7088 7.0394 22.5122 7.36349 22.377C7.69649 22.238 8.05379 22.1665 8.41459 22.1665C8.77549 22.1665 9.13269 22.238 9.46569 22.377C9.78967 22.5122 10.0844 22.7087 10.3339 22.9554L10.001 22.6226L10.3235 22.3001C10.1181 22.1468 9.89443 22.0184 9.65722 21.9181C9.65558 21.9174 9.65394 21.9167 9.6523 21.916C9.35674 21.7917 9.04476 21.7128 8.72685 21.6816ZM8.72685 21.6816C8.62326 21.6715 8.51905 21.6665 8.41459 21.6665C7.98939 21.6665 7.56824 21.7504 7.17547 21.9136C7.17394 21.9143 7.17241 21.9149 7.17089 21.9155C6.9325 22.015 6.70753 22.1426 6.5005 22.295L8.72685 21.6816ZM11.0539 22.2768L10.7081 22.6226C10.7068 22.6213 10.7056 22.62 10.7043 22.6187L11.0539 22.2768ZM11.0539 22.2768C11.0347 22.2571 11.0153 22.2377 10.9957 22.2185L11.0539 22.2768ZM11.2183 18.1429C11.953 18.4486 12.6318 18.872 13.2283 19.3955L13.2198 19.404C12.6267 18.8791 11.9508 18.4542 11.2183 18.1471C10.3305 17.7748 9.37738 17.5831 8.41469 17.5831C7.452 17.5831 6.49888 17.7748 5.61107 18.1471C4.87861 18.4542 4.20266 18.8792 3.60961 19.4041L3.60106 19.3955C4.19756 18.872 4.87632 18.4486 5.61109 18.1429C6.49957 17.7732 7.45243 17.5829 8.41469 17.5829C9.37704 17.5829 10.3298 17.7732 11.2183 18.1429ZM11.2183 18.1429L11.4104 17.6813M11.2183 18.1429L11.4104 17.6813M11.4104 17.6813C12.2055 18.0121 12.9393 18.472 13.5825 19.0412L11.4104 17.6813ZM6.12469 22.6189C6.12347 22.6201 6.12225 22.6214 6.12104 22.6226L5.78862 22.2902L6.12469 22.6189ZM16.1099 16.515C15.1353 15.6126 14.0084 14.8879 12.7805 14.375L12.7805 14.375C11.3976 13.7975 9.91385 13.5001 8.41519 13.5001C6.91653 13.5001 5.43279 13.7975 4.04993 14.375L4.04991 14.375C2.82191 14.8879 1.69515 15.6126 0.720505 16.515L0.714102 16.5086C1.69145 15.6074 2.82041 14.8839 4.05017 14.3721L3.87607 13.9537L4.05017 14.3721C5.43345 13.7964 6.91693 13.5 8.41529 13.5C9.91355 13.5 11.3971 13.7964 12.7803 14.3721L12.7803 14.3721C14.01 14.8838 15.139 15.6073 16.1163 16.5085L16.1099 16.515ZM13.9463 19.3846L13.9099 19.3481C13.922 19.3602 13.9342 19.3724 13.9463 19.3846Z"
        fill="black"
        stroke="currentColor"
      />
    </svg>
  );
};
const StarsFilled: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_911)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9931 1.50195C12.1834 1.50195 12.3572 1.61 12.4415 1.78067L15.4111 7.79784L22.0508 8.76012C22.2393 8.78743 22.3958 8.91941 22.4546 9.10052C22.5135 9.28163 22.4643 9.48042 22.3279 9.61324L17.5164 14.2967L18.6509 20.9104C18.6831 21.0981 18.6059 21.2878 18.4518 21.3996C18.2977 21.5114 18.0935 21.5261 17.925 21.4373L11.9998 18.315L6.06078 21.4375C5.89231 21.5261 5.68818 21.5113 5.5342 21.3995C5.38022 21.2876 5.30311 21.098 5.33529 20.9104L6.46981 14.2967L1.65834 9.61324C1.52189 9.48042 1.47273 9.28163 1.53154 9.10052C1.59035 8.91941 1.74693 8.78743 1.93538 8.76012L8.57511 7.79784L11.5447 1.78067C11.629 1.61 11.8028 1.50195 11.9931 1.50195Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_911">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const StarsOutline: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_910)">
        <path
          d="M12.0001 17.75L5.82808 20.995L7.00708 14.122L2.00708 9.25495L8.90708 8.25495L11.9931 2.00195L15.0791 8.25495L21.9791 9.25495L16.9791 14.122L18.1581 20.995L12.0001 17.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_910">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Minus: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_913)">
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_913">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Plus: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_912)">
        <path
          d="M12 5V19M5 12H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_912">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const UserCircle: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_925)">
        <path
          d="M6.16797 18.849C6.41548 18.0252 6.92194 17.3032 7.61222 16.79C8.30249 16.2768 9.13982 15.9997 9.99997 16H14C14.8612 15.9997 15.6996 16.2774 16.3904 16.7918C17.0811 17.3062 17.5874 18.0298 17.834 18.855M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_925">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Check: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_914)">
        <path
          d="M5 12L10 17L20 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_914">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Pin: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_915)">
        <path
          d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.485 12.0005 21.485C11.4704 21.485 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_915">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ChevronUp: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_918)">
        <path
          d="M6 14L12 8L18 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_918">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ChevronDown: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_916)">
        <path
          d="M6 10L12 16L18 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_916">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ArrowDown: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_2584)">
        <path
          d="M12 5V19M12 19L18 13M12 19L6 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_39_2584">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ArrowUpRight: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_909)">
        <path
          d="M17 7L7 17M17 7H8M17 7V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_909">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ArrowLeft: React.FC<SVG> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_906)">
        <path
          d="M5 12H19M5 12L11 18M5 12L11 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_906">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ExportIcons = {
  Square,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Close,
  FoodAndDrinks,
  Instagram,
  Menu,
  Minus,
  PeopleProfessional,
  Pin,
  Plus,
  Security,
  StarsFilled,
  StarsOutline,
  Twitter,
  UserCircle,
  VK,
  VehiclesCar,
  Youtube,
};

export default ExportIcons;
