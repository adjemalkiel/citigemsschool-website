"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import type { MessageKey } from "@/i18n";

const posts: {
  delay: string;
  user: string;
  news: string;
  titleKey: MessageKey;
}[] = [
  {
    delay: ".3s",
    user: "/assets/img/blog/user1.png",
    news: "/assets/img/blog/news1.png",
    titleKey: "blog.post1",
  },
  {
    delay: ".5s",
    user: "/assets/img/blog/user2.png",
    news: "/assets/img/blog/news2.png",
    titleKey: "blog.post2",
  },
  {
    delay: ".7s",
    user: "/assets/img/blog/user3.png",
    news: "/assets/img/blog/news3.png",
    titleKey: "blog.post3",
  },
];

export default function BlogAreaOne() {
  const t = useT();

  return (
    <>
      <section className="news-section space-top fix">
        <div className="container">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                {t("blog.badge")}
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                {t("blog.title")}
              </h2>
            </div>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-4">
              {posts.map((post) => (
                <div
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay={post.delay}
                  key={post.titleKey}
                >
                  <div className="news-single-items">
                    <Image
                      src="/assets/img/blog/blog-bg.png"
                      alt=""
                      width={419}
                      height={437}
                      className="blog-bg"
                    />
                    <div className="news-thumb-area">
                      <div className="user-cont">
                        <Image
                          src={post.user}
                          alt=""
                          width={27}
                          height={27}
                          className="user-icon"
                        />
                        <span className="tags-single">Citigems</span>
                      </div>
                      <Link
                        href="/"
                        className="news-image image-box-effect position-relative overflow-hidden"
                      >
                        <Image
                          src={post.news}
                          alt=""
                          width={327}
                          height={231}
                          className="rounded-3 w-100 img"
                        />
                        <Image
                          src={post.news}
                          alt=""
                          width={327}
                          height={231}
                          className="rounded-3 w-100 img"
                        />
                        <Image
                          src={post.news}
                          alt=""
                          width={327}
                          height={231}
                          className="rounded-3 w-100"
                        />
                      </Link>
                    </div>
                    <div className="news-content">
                      <div className="new-cont-title">
                        <Link
                          href="/"
                          className="black visible-slowly-bottom"
                        >
                          {t(post.titleKey)}
                        </Link>
                      </div>
                      <Link
                        href="/"
                        className="read-more d-flex align-items-center gap-2"
                      >
                        {t("blog.read")}{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/assets/img/element/book.png"
          alt=""
          width={134}
          height={108}
          className="book-ele-news updowns d-md-block d-none"
        />
      </section>
    </>
  );
}
