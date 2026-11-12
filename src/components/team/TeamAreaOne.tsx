"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";


export default function TeamAreaOne() {
  const t = useT();

  const members = [
    {
      delay: ".3s",
      image: "/assets/img/team/team-1.png",
      name: "Sarah Adelia",
      roleKey: "team.role1" as const,
      width: 320,
    },
    {
      delay: ".6s",
      image: "/assets/img/team/team-2.png",
      name: "Cathrine Wils",
      roleKey: "team.role2" as const,
      width: 320,
    },
    {
      delay: ".9s",
      image: "/assets/img/team/team-3.png",
      name: "Adam Smith",
      roleKey: "team.role3" as const,
      width: 338,
    },
  ];

  return (
    <>
      <section className="team-section space-bottom fix">
        <div className="container">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                {t("team.badge")}
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                {t("team.title")}
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {members.map((member) => (
              <div className="col-sm-6 col-lg-4" key={member.name}>
                <div className="team-items wow fadeInUp" data-wow-delay={member.delay}>
                  <div className="team-thumb">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={member.width}
                      height={348}
                    />
                  </div>
                  <h3>
                    <Link href="/#about">{member.name}</Link>
                  </h3>
                  <span>{t(member.roleKey)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/assets/img/element/start-cry.png"
          alt=""
          width={204}
          height={188}
          className="start-cry d-sm-block d-none updowns"
        />
      </section>
    </>
  );
}
