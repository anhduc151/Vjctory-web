import Navbar from "@/components/Navbar";
import React from "react";
import Layout from "@/components/LayoutSeo";
import { useRouter } from 'next/router'

export interface TermsProps { }

export default function Terms(props: TermsProps) {
  const router = useRouter()
  return (
    <Layout title="Terms of Use - Victory Game"
      pathname={router.pathname}
    >
      <main>
        <Navbar />
        <div className="content__container">
          <h1 className="content__noidung">1. Agreement to Terms</h1>
          <p className="content__p">
            By using our Services, you agree to be bound by these Terms and by
            our Privacy Policy. If you do not agree to these Terms and our
            Privacy Policy, do not use the Services.
          </p>

          <h1 className="content__noidung">2. Who May Use the Services</h1>
          <h1 className="content__noidung">2.1. Eligibility</h1>
          <p className="content__p">
            You may use the Services only if you are 16 years or older and are
            not barred from using the Services under applicable law. If you are
            under the age of 18, or under the age of majority where you live,
            you say that your legal guardian has reviewed and agreed to these
            Terms.
          </p>

          <h1 className="content__noidung">3. Privacy Policy</h1>
          <p className="content__p">
            Please refer to our Privacy Policy, available for
            https://vjctory.com/privacy information on how we collect, use and
            disclose information from you, your computer and your mobile device.
            You understand that through your use of our Services you acknowledge
            the collection, use and sharing of this information as described in
            our Privacy Policy. If you don’t agree with the Privacy Policy, then
            you must stop using our Services.
          </p>

          <h1 className="content__noidung">4. Rights and Terms for Games</h1>
          <h1 className="content__noidung">
            4.1. Rights in Game Granted by Us.
          </h1>
          <p className="content__p">
            Subject to your compliance with these Terms, we grant you a limited,
            non-exclusive, non-transferable, non-sublicenseable license to
            download and install a copy of the Game on a mobile device that you
            own or control and to run such copy of the Game solely for your own
            personal non-commercial purposes. You may not copy the Game, except
            for making a reasonable number of copies for backup or archival
            purposes. Except as expressly permitted in these Terms, you may not:
            copy, modify or create derivative works based on the Game;
            distribute, transfer, sublicense, lease, lend or rent the Game to
            any third party; reverse engineer, decompile or disassemble the
            Game; or make the functionality of the Game available to multiple
            users through any means. We reserve all rights in and to the Game
            not expressly granted to you under these Terms.
          </p>

          <h1 className="content__noidung">
            5. General Prohibitions and Our Enforcement Rights
          </h1>
          <p className="content__p">
            You agree not to do any of the following:
          </p>
          <p className="content__p">
            – Post, upload, publish, submit or transmit any material that:
            infringes, misappropriates or violates a third party’s patent,
            copyright, trademark, trade secret, moral rights or other
            intellectual property rights, or rights of publicity or privacy;
            violates, or encourages any conduct that would violate, any
            applicable law or regulation or would give rise to civil liability;
            is fraudulent, false, misleading or deceptive; is defamatory,
            obscene, pornographic, vulgar or offensive; promotes discrimination,
            bigotry, racism, hatred, harassment or harm against any individual
            or group; is violent or threatening or promotes violence or actions
            that are threatening to any person or entity; or promotes illegal or
            harmful activities or substances.
          </p>
          <p className="content__p">
            – Use, display, mirror or frame the Services or the Content or any
            individual element within the Services, our name, any of our
            trademarks, logo or other proprietary information, or the layout and
            design of any page or form contained on a page, without our express
            written consent;
          </p>
          <p className="content__p">
            – Attempt to probe, scan or test the vulnerability of any of our
            systems or networks or breach any security or authentication
            measures;
          </p>
          <p className="content__p">
            – Avoid, bypass, remove, deactivate, impair, descramble or otherwise
            circumvent any technological measure implemented by us or any of our
            providers or any other third party (including another user) to
            protect the Services;
          </p>
          <p className="content__p">
            – Attempt to access or search the Services through the use of any
            engine, software, tool, agent, device or mechanism (including
            spiders, robots, crawlers, data mining tools or the like) other than
            the software and/or search agents provided by us or other generally
            available third-party web browsers;
          </p>
          <p className="content__p">
            – Send any unsolicited or unauthorized advertising, promotional
            materials, email, junk mail, spam, chain letters or other form of
            solicitation;
          </p>
          <p className="content__p">
            – Use any meta tags or other hidden text or metadata utilizing our
            trademark, logo URL or product name without our express written
            consent;
          </p>
          <p className="content__p">
            – Use the Services, or any portion thereof, for any commercial
            purpose or for the benefit of any third party or in any manner not
            permitted by these Terms;
          </p>
          <p className="content__p">
            – Attempt to decipher, decompile, disassemble or reverse engineer
            any of the software used to provide the Services;
          </p>
          <p className="content__p">
            – Interfere with, or attempt to interfere with, the access of any
            user, host or network, including, without limitation, sending a
            virus, overloading, flooding, spamming, or mailbombing the Services;
          </p>
          <p className="content__p">
            – Collect or store any personally identifiable information from the
            Services from other users of the Services without their express
            permission;
          </p>
          <p className="content__p">
            – Impersonate or misrepresent your affiliation with any person or
            entity
          </p>
          <p className="content__p">
            – Violate any applicable law or regulation;
          </p>
          <p className="content__p">
            – Encourage or enable any other individual to do any of the
            foregoing.
          </p>
          <p className="content__p">
            Although we’re not obligated to monitor access to or use of the
            Services, we have the right to do so for the purpose of operating
            the Services, to ensure compliance with these Terms, and to comply
            with applicable law or other legal requirements. We reserve the
            right, but are not obligated, to remove or disable access to any
            Services, at any time and without notice, including, but not limited
            to, if we, at our sole discretion, consider any activity to be
            objectionable or in violation of these terms. We have the right to
            investigate violations of these terms or conduct that affect the
            service. We may also consult and cooperate with law enforcement
            authorities to prosecute users who violate the law.
          </p>

          <h1 className="content__noidung">
            6. In-app purchases and Subscriptions
          </h1>
          <p className="content__p">
            We may license you certain virtual goods to be used within the
            Service and which you may purchase with real cash or which you may
            earn or redeem via gameplay (“Virtual Items”). Virtual Items are
            licensed to you on a limited, personal, non-transferable,
            non-sublicensable and revocable basis and limited only for
            non-commercial use.
          </p>
          <p className="content__p">
            We may manage, control, modify or eliminate Virtual Items at any
            time, with or without notice.
          </p>
          <p className="content__p">
            The transfer of Virtual Items is prohibited, except where expressly
            authorized in the Services, if any.
          </p>
          <p className="content__p">
            Virtual Items do not have an equivalent value in real cash and do
            not act as a substitute for real world money. Neither we nor any
            other person or entity have any obligation to exchange virtual items
            for anything of value. We have no liability for hacking or loss of
            your Virtual Items.
          </p>
          <p className="content__p">
            The price and availability of Virtual Items are subject to change
            without notice.
          </p>
          <p className="content__p">
            Subject to mandatory legislation, all purchases and redemptions of
            Virtual Items made through the Services are final and
            non-refundable. You acknowledge and consent that the provision of
            Virtual Items for use in Services is a process that commences
            immediately upon purchase and you forfeit your right of withdrawal
            once the performance has started.
          </p>
          <p className="content__p">
            Subject to mandatory legislation, you agree that we are not required
            to provide a refund for Virtual Items for any reason, and that you
            will not receive money or other compensation for unused Virtual
            Items, whether your loss of license under these Agreement was
            voluntary or involuntary.
          </p>
          <p className="content__p">
            If you request that your personal data to be erased as specified in
            our Privacy Policy, you will permanently and without a right to a
            refund lose all your Virtual Items as we can no longer associate
            such Virtual Items with you.
          </p>
          <p className="content__p">
            If you purchase an auto-recurring periodic subscription through an
            in-app purchase, your IAP Account will be billed continuously for
            the subscription until you cancel in accordance with the platform
            terms. In all cases, please refer to the terms of your application
            platform which apply to your in-app purchases. You agree to pay your
            subscription fee in advance of receiving any such Subscription
            Service. You are responsible for all charges incurred under your
            account. You agree that if you purchase Subscription Services
            through the Application Store, all payment related questions,
            issues, disagreements, and/or disputes shall be handled in
            accordance with the terms of service or other legal agreements that
            govern your use of a given payment processing service and/or method,
            and in no event will Traffic Jam Cars Puzzle have any responsibility
            in connection with any of the foregoing.
          </p>
          <ul>
            <li className="li">
              Subscription automatically renews unless auto-renew is turned off
              at least 24hours before the end of the current period;
            </li>
            <li className="li">
              Account will be charged for renewal within 24hours prior to the
              end of the current period, and identify the cost of the renewal;
            </li>
            <li className="li">
              Subscriptions can be managed by the user: You can turn off
              automatic renewal after purchase through the application
              platform’s “Subscription Management”;
            </li>
          </ul>
          <h1 className="content__noidung">
            YOU ACKNOWLEDGE THAT WE ARE NOT REQUIRED TO PROVIDE A REFUND FOR ANY
            REASON, AND THAT YOU WILL NOT RECEIVE MONEY OR OTHER COMPENSATION
            FOR UNUSED VIRTUAL ITEMS WHEN YOU DELETE YOUR ACCOUNT OR WHEN YOU
            CEASE TO USE THE GAME.
          </h1>

          <h1 className="content__noidung">
            7. Links to Third Party Websites or Resources
          </h1>
          <p className="content__p">
            The Services may incorporate services provided by third parties,
            including but not limited to third party accounts or advertisements.
            The Terms of Use does not grant you any license, right, title or
            other interest in third party services, which may require you to
            enter into agreements between you and a third party. It is up to you
            to review and determine the acceptability of any third party
            agreement.
          </p>

          <h1 className="content__noidung">8. Apple</h1>
          <p className="content__p">
            If you use the Services on an Apple device, then you agree and
            acknowledge that:
          </p>
          <p className="content__p">
            – Apple, Inc. bears no duties or obligations to you under the Terms,
            including, but not limited to, any obligation to furnish you with
            maintenance and support with respect to the Services;
          </p>
          <p className="content__p">
            – You will have no claims, and you waive any and all rights and
            causes of action against Apple with respect to the Services or the
            Terms, including, but not limited to claims related to maintenance
            and support, intellectual property infringement, liability, consumer
            protection, or regulatory or legal conformance;
          </p>
          <p className="content__p">
            – Apple and Apple’s subsidiaries are third party beneficiaries of
            the Terms. Upon your acceptance of the Terms, Apple will have the
            right (and will be deemed to have accepted the right) to enforce
            these Terms against you as a third party beneficiary thereof.
          </p>
          <p className="content__p">
            Export Control. You represent and warrant that: you are not located
            in a country that is subject to a U.S. Government embargo, or that
            has been designated by the U.S. Government as a “terrorist
            supporting” country; and you are not listed on any U.S. Government
            list of prohibited or restricted parties.
          </p>

          <h1 className="content__noidung">9. Termination</h1>
          <h1 className="content__noidung">9.1 Suspension and Termination:</h1>
          <p className="content__p">
            – Vjctory may suspend or terminate your Account and access to the
            Services at any time for any reason including, but not limited to,
            your violation of the Terms of Use, as determined in its sole
            discretion. Whether a suspension will be lifted is at the sole
            decision of Vjctory. You may terminate your Account and access to
            the Services at any time by ceasing to use the Services and deleting
            any Vjctory game you have installed.
          </p>

          <h1 className="content__noidung">
            9.2 Effect of Suspension or Termination:
          </h1>
          <p className="content__p">
            – Upon termination, you acknowledge and agree that Vjctory shall
            cease to provide you access to the Services and may delete your
            Account and data associated with your use of the Services, including
            purchases you have made. You acknowledge and agree that you are not
            entitled to a refund or other compensation of any kind as a result
            of suspension or termination, regardless of whether effected by you
            or Vjctory, and that Vjctory shall not be liable to you or any third
            party for such suspension or termination and any related loss
            related thereto.
          </p>

          <h1 className="content__noidung">10. Warranty Disclaimers</h1>
          <p className="content__p">
            THE SERVICES AND CONTENT ARE PROVIDED “AS IS,” WITHOUT WARRANTY OF
            ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT
            OF COURSE OF DEALING OR USAGE OF TRADE. WE MAKE NO WARRANTY THAT THE
            SERVICES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN
            UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. WE MAKE NO WARRANTY
            REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS,
            COMPLETENESS OR RELIABILITY OF ANY CONTENT.
          </p>

          <h1 className="content__noidung">11. Indemnity</h1>
          <p className="content__p">
            You shall indemnify, defend and hold Vjctory, its directors,
            officers, employees, agents, contractors and partners harmless from
            and against any claim, liability, injury, damage, cost, loss or
            expense, including reasonable attorneys’ fees, that arise from your
            use of the Services or associated third party services. You cannot
            settle any claim without Vjctory advance written consent unless such
            claim releases Vjctory unconditionally. Vjctory reserves the right
            to, at its expense, assume control of the claim.
          </p>

          <h1 className="content__noidung">12. Limitation of Liability</h1>
          <p className="content__p">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER WE NOR
            ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE
            SERVICES OR CONTENT WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
            EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF
            DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM
            FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN
            CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE
            THE SERVICES OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT
            (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY,
            AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH
            DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE
            FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE
            EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL
            DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. TO THE
            FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL OUR
            TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR
            FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT EXCEED
            THE AMOUNTS YOU HAVE PAID TO US FOR USE OF THE SERVICES, IF
            ANYTHING.
          </p>

          <h1 className="content__noidung">13. Time Limitation on Claims</h1>
          <p className="content__p">
            You agree that any claim you may have arising out of or relating to
            your relationship with us must be filed within one year after such
            claim arose; otherwise your claim is permanently barred.
          </p>
          <h1 className="content__noidung">14. Governing Law and Venue</h1>
          <p className="content__p">
            These Terms and any action related thereto will be governed by the
            laws of Japan without regard to its choice of law or conflict of law
            principles. Further, you and we agree to the exclusive jurisdiction
            of the courts in Tokyo, Japan to resolve any dispute, claim, or
            controversy that relates to or arises in connection with the
            Services.
          </p>

          <h1 className="content__noidung">15. General Terms</h1>
          <p className="content__p">
            These Terms constitute the entire and exclusive understanding and
            agreement between us and you regarding the Services and Content, and
            these Terms supersede and replace any and all prior oral or written
            understandings or agreements between us and you regarding the
            Services and Content. If for any reason a court of competent
            jurisdiction finds any provision of these Terms invalid or
            unenforceable, that provision will be enforced to the maximum extent
            permissible and the other provisions of these Terms will remain in
            full force and effect.
          </p>
          <p className="content__p">
            You may not assign or transfer these Terms, by operation of law or
            otherwise, without our prior written consent. Any attempt by you to
            assign or transfer these Terms, without such consent, will be null.
            We may freely assign or transfer these Terms without restriction.
            Subject to the foregoing, these Terms will bind and inure to the
            benefit of the parties, their successors and permitted assigns.
          </p>
          <p className="content__p">
            Any notices or other communications provided by us under these
            Terms, including those regarding modifications to these Terms, will
            be given: via email; or by posting to the Services. For notices made
            by e-mail, the date of receipt will be deemed the date on which such
            notice is transmitted.
          </p>
          <p className="content__p">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of such right or provision. The waiver of
            any such right or provision will be effective only if in writing and
            signed by our duly authorized representative. Except as expressly
            set forth in these Terms, the exercise by either party of any of its
            remedies under these Terms will be without prejudice to its other
            remedies under these Terms or otherwise.
          </p>

          <h1 className="content__noidung">16. Contact</h1>
          <p className="content__p">
            If you have any questions about these Terms or the Services, please
            contact us at support@zokstudio.com or the address set forth below.
          </p>
          <h1 className="content__noidung">Vjctory</h1>
          <p className="content__p">
            118 Y LAN NGUYEN PHI ST, Danang, Vietnam (550000).
          </p>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {} }
}
