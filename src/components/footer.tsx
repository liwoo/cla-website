import { Trans } from "gatsby-plugin-react-i18next";
import React from "react";
import { Container } from "./layouts";

const about = "Christian Life Assembly is a multi-national, multi-cultural Church that believes in the changing power of the Word of God and that seeks to see transformation of our communities through the love of Jesus Christ."

function Footer() {
  return (
    <Container className="mt-20 text-white bg-secondary">
      <h2 className="pt-8 text-2xl text-center">
        <Trans>Footer Title</Trans>
        <p className="text-sm"><Trans>Footer Description</Trans></p>
      </h2>
      <footer className="p-8 text-white footer bg-secondary">
        <div>
          <p>ACME Industries Ltd.
            <br />Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a href="/" className="link link-hover">Branding</a>
          <a href="/" className="link link-hover">Design</a>
          <a href="/" className="link link-hover">Marketing</a>
          <a href="/" className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a href="/" className="link link-hover">About us</a>
          <a href="/" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Jobs</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Social Media</span>
          <a href="/" className="link link-hover">Terms of use</a>
          <a href="/" className="link link-hover">Privacy policy</a>
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <p className="py-8 text-center"><Trans>Signature</Trans></p>
    </Container>
  );
}

export default Footer;
