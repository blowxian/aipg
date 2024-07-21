import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="inline-flex" aria-label="Coogle">
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round"
                 strokeMiterlimit="2" clipRule="evenodd" width="28" height="28" viewBox="0 0 390 255">
                <path
                      d="m357.706,74.54213l-121.095,0l0,37.53913l47.86275,0c-15.3725,42.64975 -56.20875,73.15263 -104.17063,73.15263c-61.13575,0 -110.69663,-49.5625 -110.69663,-110.69175l-36.9005,0c0,81.50838 66.08225,147.589 147.59713,147.589c64.98375,0 120.16063,-41.99488 139.86375,-100.3145l0,73.81888l37.5375,0l0,-121.09338l0.00163,0z"/>
                <path
                      d="m199.07188,74.54213l-37.5375,0l0,37.53913l37.5375,0l0,-37.53913l37.53913,0l0,-37.53913l-37.5375,0l0,37.53913l-0.00163,0zm-75.07825,-37.53913l0,37.53913l37.53913,0l0,-37.53913l-37.5375,0l-0.00163,0z"/>
            </svg>
        </Link>
    );
}
