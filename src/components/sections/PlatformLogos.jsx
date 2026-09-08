import aws from '../../assets/images/common/logos/aws.png'
import microsoft from '../../assets/images/common/logos/microsoft.png'
import oracle from '../../assets/images/common/logos/oracle-scm-cloud.png'
import servicenow from '../../assets/images/common/logos/servicenow-logo 1.png'
import sap from '../../assets/images/common/logos/sap.png'
import powerBi from '../../assets/images/common/logos/power-bi.png'
import cargowise from '../../assets/images/common/logos/cargowise-one.png'
import e2open from '../../assets/images/common/logos/e2-open.png'
import infor from '../../assets/images/common/logos/infor-wms 1.png'
import project44 from '../../assets/images/common/logos/project-44.png'

const ROW_1 = [
  { src: aws, alt: 'AWS' },
  { src: microsoft, alt: 'Microsoft' },
  { src: oracle, alt: 'Oracle Cloud Platform' },
  { src: servicenow, alt: 'ServiceNow' },
]
const ROW_2 = [
  { src: sap, alt: 'SAP' },
  { src: powerBi, alt: 'Power BI' },
  { src: cargowise, alt: 'CargoWise' },
  { src: e2open, alt: 'E2open' },
  { src: infor, alt: 'Infor' },
  { src: project44, alt: 'project44' },
]

function PlatformLogos({ heading, desc }) {
  return (
    <section className="bg-white py-16 text-center nav:py-24">
      <div className="mx-auto w-3/4 max-w-3xl">
        <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">{heading}</h2>
        <p className="mb-12 font-body leading-relaxed text-neutral-700">{desc}</p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {ROW_1.map(({ src, alt }) => (
            <img
              key={alt}
              src={src?.src || src}
              alt={alt}
              loading="lazy"
              className="h-8 w-auto max-w-[140px] object-contain nav:h-[55px]"
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {ROW_2.map(({ src, alt }) => (
            <img
              key={alt}
              src={src?.src || src}
              alt={alt}
              loading="lazy"
              className="h-8 w-auto max-w-[140px] object-contain nav:h-[55px]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformLogos
