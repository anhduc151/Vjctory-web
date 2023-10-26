import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Layout from "@/components/LayoutSeo";
import { useRouter } from 'next/router';

export interface PrivacyProps { }

export default function Privacy(props: PrivacyProps) {
  const router = useRouter()
  return (
    <Layout title="Privacy - Victory Game"
    pathname={router.pathname}
    >
      <main>
        <Navbar />
        <div className="content__all">
          <div className="content__container">
            <p className="content__p">
              Hello! Welcome to the Vjctory Privacy Policy. This policy
              describes how Vjctory and, its other group companies (collectively
              described as “Vjctory”, “we”, “us” or “our”) and its third party
              marketing and advertising partners collect, use, process and share
              information about you.
            </p>
            <p className="content__p">
              This Privacy Policy applies to all of our games, whether played on
              our website https://vjtory.com, on mobile devices (Android/iOs).
              It also applies to our Marketing and Advertising activities on all
              platforms and other services that we may provide to you from time
              to time. In this Privacy Policy we refer to our games, websites,
              marketing and advertising activities and other services
              collectively as our “Services”.
            </p>
            <p className="content__p">
              By downloading, accessing and/or playing our games, or interacting
              with our websites or other Services, you agree to the collection
              and use of your information in accordance with this Privacy
              Policy. , including consenting to Vjctory’s and our advertising
              partners’ use of your data for targeted advertising purposes as
              described in the Marketing and Advertising sections of this
              Privacy Policy. Those sections also explain how you can withhold
              or withdraw your consent to the use of your data for targeted
              advertising purposes. If you have any other concerns about
              providing information to us or it being used as described in this
              Privacy Policy you should not use our games or other Services.
            </p>
            <h1 className="content__noidung">1. Privacy Policy update</h1>
            <p className="content__p">Effective Date: 04 February 2022</p>
            <p className="content__p">
              We have updated our privacy policy, please check it below.
            </p>
            <p className="content__p">
              What are the main changes? The update does not change your game
              experience but is a result of some adjustments:
            </p>
            <ul className="ul">
              <li className="li">we added information about Data Deletion,</li>
            </ul>

            <h1 className="content__noidung">2. Playing our games</h1>
            <p className="content__p">
              By downloading, accessing and/or playing our games or using our
              other Services, you consent to the collection of information about
              you by us. Most of this data comes directly from you or your
              device, such as device information, country and region, and game
              play information. We use this data to provide our games and
              Services to you, including for the purposes of optimization,
              preventing fraud, customizing in-game offers and verifying
              purchases. We may also use it for the other purposes set out in
              this Privacy Policy, including for Marketing and Advertising
              purposes.
            </p>

            <h1 className="content__noidung">3. Data Collection</h1>
            <p className="content__p">
              We will collect and store any data that you provide to us,
              including when you create your account or a player profile while
              using our games.
            </p>

            <h1 className="content__noidung">
              3.1 Data about you that you give us directly
            </h1>
            <p className="content__p">
              While you use our games, you may give us data directly, and we
              will store that data on our databases and use it for the purposes
              described in this Privacy Policy. When you use our games you may
              give us the data like:
            </p>
            <ul>
              <li className="li">first and last name</li>
              <li className="li">nickname</li>
              <li className="li">gender</li>
              <li className="li">age</li>
              <li className="li">e-mail address; or</li>
              <li className="li">
                other information that helps us make sure it is you accessing
                your account or helps us improve our Services
              </li>
            </ul>
            <p className="content__p">
              You may also create a player profile in our game which other
              players can see and which may include the data like:
            </p>
            <ul>
              <li className="li">
                profile photo (for example while connecting by Facebook)
              </li>
              <li className="li">first and last name</li>
              <li className="li">nickname</li>
              <li className="li">physical location data that you provide</li>
              <li className="li">
                player ID that is created by us and used to identify your game
                account.
              </li>
            </ul>
            <h1 className="content__noidung">
              3.2 Information about your contacts
            </h1>
            <p className="content__p">
              When you connect to our game by Facebook, we may also collect
              information that you provide to us about your Facebook Friends
              List, but be sure to ask their permission first.
            </p>
            <h1 className="content__noidung">
              3.3 Data generated using our games
            </h1>
            <p className="content__p">
              When you use our games, we collect data about the ways in which
              you use and interact with our games, such as when and for how long
              you play, game features and other players you interact with,
              purchases you make, progress or levels you achieve, and other
              gameplay activities. We also collect crash data such as crash logs
              to diagnose issues in our games.
            </p>
            <p className="content__p">
              We may access in real-time, record, and/or store archives of these
              communications, comments, and other user-generated content on our
              servers to make use of them to protect the safety of our players;
              to protect our rights and property in connection with our
              Services; to conduct research; to operate, improve, personalize,
              and optimize our Services and our players’ experiences, including
              through the use of analytics; and to manage and deliver (tailored)
              advertising. Where required by law, we will seek your consent for
              this.
            </p>
            <h1 className="content__noidung">3.4 Payment data</h1>
            <p className="content__p">
              We also collect data related to any purchases you make.
            </p>
            <p className="content__p">
              If you purchase in-game virtual currency, our third-party payment
              partners will collect the billing and financial information it
              needs to process your charges. This may include your postal
              address, e-mail address, and financial data. Our payment partners
              do not share your financial information, like credit card numbers,
              with us, but they may share non-financial data with us related to
              your purchases, like your name, and the items purchased.
            </p>
            <p className="content__p">
              When you play our games connected third-party applications or
              platforms (like Facebook, Apple or Google), any purchases you make
              will be processed by that third-party application and subject to
              that third-party application’s terms of service and privacy
              policy. For these purchases, Vjctory does not receive your
              financial data, but may receive non-financial information related
              to your purchases, like your name and the items purchased. The
              information Vjctory receives depends on our game you are playing
              and the third-party application. Our Terms of Use explain our
              policies and terms related to charges, billing, third-party
              credits, and virtual currencies. Please note that purchases of
              third-party credits or currencies are also subject to those
              parties terms of service and privacy policies.
            </p>

            <h1 className="content__noidung">3.5 Support correspondence</h1>
            <p className="content__p">
              When you ask for help from our support team, we may collect and
              store the contact information you give them (generally, your name,
              e-mail address, player ID), data about your game play or your
              activity in a game. We will also store the communications you have
              with our support and any additional information in those
              communications in order to provide support and improve the
              Services. Please note that in many cases in order to identify you
              we will need a minimum amount of data (e.g., player ID). Without
              this information, we will not be able to provide support or answer
              to your data rights’ requests, so please be aware that we may
              contact you and request additional information in order to provide
              service.
            </p>
            <p className="content__p">
              When you contact us for support, the below information will be
              handled by our processors strictly in accordance with our
              instructions:
            </p>
            <ul>
              <li className="li">game you are playing</li>
              <li className="li">name or nickname</li>
              <li className="li">e-mail address</li>
              <li className="li">platform you are playing on</li>
              <li className="li">problem description</li>
              <li className="li">language</li>
              <li className="li">player ID or</li>
              <li className="li">Facebook ID.</li>
            </ul>
            <p className="content__p">
              Our processors also automatically collect additional types of
              data, such as your IP address and data sent by your device to
              provide and improve their service. As a safeguard to protect your
              privacy, we arranged a data processing agreement with our support
              partners or joint sharing personal data agreements (where our
              partner is also a data controller of the personal data), where we
              ensure that your personal information is only used in accordance
              with our instructions and not for their own purposes or are used
              in accordance with the applicable law requirements or our
              contractual arrangements with our partners. In addition, your
              request is submitted via an encrypted connection and we apply the
              principle of data minimization to collect only such data that is
              actually required to best answer your support request. The content
              of your request will be stored as long as you are an active player
              of our game, so you can get a faster response in case you have a
              similar problem in the future. The purpose of using the service
              support partners is to answer the extensive number of user
              requests we receive. Our support processors help us to improve our
              customer service so that you can get a faster and helpful
              response.
            </p>

            <h1 className="content__noidung">
              3.6 Data about you from third-party partners
            </h1>
            <p className="content__p">
              We collect some information from other entities, including social
              networks like Facebook, if you access our games through your
              accounts with those entities or you choose to connect your
              accounts with those companies to our games.
            </p>
            <p className="content__p">
              If you play our games through any third-party applications,
              including Facebook, Vjctory may receive certain data about you
              from the provider of the third-party application. The information
              we receive depends on our game you are playing, the third-party
              application, your privacy settings, and, if applicable, your
              friends’ privacy settings on that third-party application. For
              instance, we may collect and store some or all of the following
              information from the provider of the connected third-party
              application:
            </p>
            <ul>
              <li className="li">first and last name,</li>
              <li className="li">profile picture,</li>
              <li className="li">
                your user ID (Facebook ID), which may be linked to
                publicly-available information (public profile) like your name
                and profile photo,
              </li>
              <li className="li">your friends list and other public data,</li>
              <li className="li">
                e-mail address you provided to that third-party application,
              </li>
              <li className="li">
                physical location and that of the devices you use to access our
                Services,
              </li>
              <li className="li">
                other publicly-available data on the third-party application,
              </li>
              <li className="li">
                any other information that you or the provider of the
                third-party application share with us.
              </li>
            </ul>
            <p className="content__p">
              If you access our Services from a third-party application or
              connect our Services to a third-party application, you should also
              read that third-party application’s terms of use and their privacy
              policy.
            </p>

            <h1 className="content__noidung">
              4. Use of data and legal grounds for processing
            </h1>
            <p className="content__p">
              We use your data to provide, personalize, maintain the security
              of, and improve the games you use; to maintain our business
              operations; and to exercise, defend or establish our rights.
            </p>
            <p className="content__p">
              We use your data under several legal grounds, including:
            </p>
            <ul>
              <li className="li">to perform our contract with you</li>
              <li className="li">for our legitimate business interests</li>
              <li className="li">to comply with our legal obligations</li>
              <li className="li">your consent.</li>
            </ul>
            <p className="content__p">
              The use of data we collect and store is to provide you with the
              Services you request from us and to improve your in-game
              experience, but there are other uses as well. The uses for which
              we collect and store your data include:
            </p>
            <ul>
              <li className="li">
                Improve and optimize our games and your experiences in our games
              </li>
              <li className="li">
                Create your player accounts and allow you to play our games
              </li>
              <li className="li">
                Identify and suggest connections with other players and
                personalize our Services to you
              </li>
              <li className="li">
                Communicate with you, including in-game updates and
                notifications, new Services, and promotional offers that we
                think might be of interest to you
              </li>
              <li className="li">
                Enable players to communicate with each other
              </li>
              <li className="li">
                Provide support and respond to player requests
              </li>
              <li className="li">Protect the safety</li>
              <li className="li">
                Protect our rights and property in connection with our games
              </li>
              <li className="li">
                Prevent fraud or potentially illegal activities, and to enforce
                our Terms of Use
              </li>
              <li className="li">Manage and deliver customized advertising</li>
            </ul>
            <p className="content__p">
              We normally collect data from you only where we need it to perform
              our contract with you (i.e., our Terms of Use), where the
              processing is in our legitimate interests (provided that these are
              not overridden by your interests or rights), or if you give us
              your consent.
            </p>
            <p className="content__p">
              In some cases, we may also have a legal obligation or need to
              collect data from you or may otherwise need the personal data to
              protect your vital interests or those of another person (for
              example, another player). If we ask you to provide data to comply
              with a legal requirement or to perform a contract with you, this
              will normally be clear from the context in which we are asking you
              to provide your data (for example, when we ask you to provide a
              username to access our Services, this will be to create an account
              for you in accordance with our Terms of Use), and, if not, we will
              provide an explanation to you at the relevant time. We will also
              make clear whether providing data is mandatory.
            </p>
            <p className="content__p">
              Similarly, if we collect and use your data in reliance on our
              legitimate interests (or those of any third party), it will be
              made clear to you at the relevant time what those legitimate
              interests are (such as personalizing our services and direct
              marketing, improving and optimizing our games and your experiences
              in our games, communicating with you, providing support and
              respond to player requests, protecting the safety, protecting our
              rights and property in connection with our games, preventing fraud
              or potentially illegal activities and enforcing our Terms of Use,
              administering promotional activities or events sponsored,
              resolving any disputes we may have with you or other players,
              enforcing our agreements with third parties, for example).
            </p>
            <p className="content__p">
              If you have questions or need further information about the legal
              bases on which we collect and use your personal information,
              please contact us at any time.
            </p>

            <h1 className="content__noidung">5. Data retention</h1>
            <p className="content__p">
              We will keep your information for as long as necessary to provide
              you with the Services, maintain our legitimate business
              operations, and/or exercise, defend or establish our rights.
            </p>
            <p className="content__p">
              How long we retain your personal information depends on why we
              collected it and how we use it, but we will not retain your
              personal information for longer than is necessary for our business
              purposes or for legal requirements.
            </p>
            <p className="content__p">
              We will retain personal information about you and connected with
              your account and/or the Services you use from us for as long as
              you have an active account with us. We will take reasonable
              measures to delete this personal information if you delete your
              account. However, you acknowledge that we may retain some
              information after you have closed, or we have deleted, your
              account with us where necessary to enable us to meet our legal
              obligations or to exercise, defend, or establish our rights.
            </p>

            <h1 className="content__noidung">
              6. Security of your information
            </h1>
            <p className="content__p">
              We work to protect your information but you as a player also have
              to take certain steps.
            </p>
            <p className="content__p">
              We implement reasonable and appropriate security measures to help
              protect the security of your data and to ensure that your data is
              treated securely and in accordance with applicable laws.
            </p>
            <p className="content__p">
              It is important that you protect and maintain your Vjctory account
              is security and that you immediately tell us of any unauthorized
              use of your account. If you access our Services through Facebook
              and your account is hacked or otherwise compromised, this may lead
              to someone accessing or deleting your game accounts without your
              permission. So, be careful to keep your Facebook account
              information, including your social network account password,
              secure as well.
            </p>

            <h1 className="content__noidung">7. Visiting our websites</h1>
            <p className="content__p">
              When you visit our other websites, and other websites and forums
              operated by us (“Websites”), we collect information about you,
              such as details about how you use and interact with such Websites.
              We may use the information we collect about you for a number of
              purposes, including for operating and optimising the Websites, in
              connection with our advertising purposes, and for research or
              analysis.
            </p>

            <h1 className="content__noidung">8. Marketing</h1>
            <p className="content__p">
              Unless you opt out as explained below, we and our third party
              partners use information collected about you to send you marketing
              communications about other Vjctory PTE. LTD. games and related
              Services based on your interests. For example, we may send emails,
              serve ads within our Services or place ads on third party
              websites, apps and Internet-connected devices.
            </p>

            <h1 className="content__noidung">9. Advertising</h1>
            <p className="content__p">
              Our games may include advertising for third party products and
              services. By accepting this Privacy Policy and downloading or
              continuing to play our games or use our Services, and unless you
              opt out of interest-based advertising as explained in this
              section, you consent to us and our advertising partners collecting
              and using information about you to improve advertising, targeting
              and measurement systems so that we can show you relevant third
              party ads in our games.
            </p>

            <h1 className="content__noidung">
              10. Ad identifiers, cookies and similar technologies
            </h1>
            <p className="content__p">
              To provide our games, Websites and interest-based advertising, we
              use ad identifiers, cookies and similar technologies. This section
              describes our use of these technologies and how you can manage
              your preferences.
            </p>

            <h1 className="content__noidung">11. How to delete your account</h1>
            <p className="content__p">
              You are entitled to obtain information from us on how we handle
              your personal data, to see copies of all personal data held by us
              and to request that your personal data is amended, corrected or
              deleted from our systems. You can also limit, restrict or object
              to the processing of your data.
            </p>
            <p className="content__p">
              Before trying to delete your game account please think very
              carefully about this decision. Because your account is essential
              as its stores all your game progress, including items and
              subscriptions you purchase. It also contains information about
              your ranking position etc. I other words by deleting your account
              you lose all your game-related data without the ability to have a
              refund of purchases or restoration.
            </p>
            <p className="content__p">
              Removing the profile on our game is irreversible, so it is
              important you consider these factors before making the decision to
              remove your data. If you still would like to go ahead and request
              us to delete all of your player information, we’ll need you to
              apply to our email support@zokstudio.com. When we receive your
              request, we’ll need you to provide more information to check your
              identity for the account ownership before we can complete it. We
              will inform you upon delete of your account.
            </p>

            <h1 className="content__noidung">12. Vjctory is Partner list</h1>
            <p className="content__p">
              Vjctory is Partner List includes a list of trusted advertising
              network companies with which Vjctory works directly or indirectly,
              and which may receive your personal data and further process
              according to their own rules. We encourage you to review the
              privacy policies of our partners to ensure that you understand
              their treatment of personal data that they may process. Please
              note that Vjctory may not directly work or share personal data
              with all of the companies listed below. From time to time, we may
              add partners to this list when we make new agreements with
              partners who are committed to protecting your personal data.
            </p>

            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Privacy Policy</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Unity Technologies</td>

                    <td>
                      <Link href={"https://unity.com/legal/privacy-policy"}>
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Google</td>
                    <td>
                      <Link
                        href={"https://policies.google.com/privacy?hl=en-US"}
                      >
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Facebook</td>
                    <td>
                      <Link
                        href={
                          "https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                        }
                      >
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Applovin</td>
                    <td>
                      <Link href={"https://www.applovin.com/privacy/"}>
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Vungle</td>
                    <td>
                      <Link href={"https://liftoff.io/privacy-policy/"}>
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Adcolony</td>
                    <td>
                      <Link
                        href={"https://www.digitalturbine.com/privacy-policy/"}
                      >
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>ironSource</td>
                    <td>
                      <Link href={"https://www.is.com/privacy-policy/"}>
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Chartboost</td>
                    <td>
                      <Link
                        href={
                          "https://answers.chartboost.com/en-us/articles/200780269"
                        }
                      >
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Tapjoy</td>
                    <td>
                      <Link
                        href={"https://dev.tapjoy.com/en/legal/Privacy-Policy"}
                      >
                        Read detail
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Mintegral</td>
                    <td>
                      <Link href={"https://www.mintegral.com/en/privacy"}>
                        Read detail
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h1 className="content__noidung">13. Children</h1>
            <p className="content__p">
              You must be over a certain age to play our games and use our
              Services, depending on where you live. For the full list of age
              restrictions by country, please see below. We do not knowingly
              collect or solicit personal information from or direct or target
              interest based advertising to anyone under the ages set out below,
              or knowingly allow such persons to use our Services. If you
              believe that we might have any information from or about a child
              under the age set out below, please Contact Us.
            </p>

            <h1 className="content__noidung">14. General</h1>
            <p className="content__p">
              Our Privacy Policy contains further details about:
            </p>
            <p className="content__p">
              – Who we share your information with and the reasons for sharing
              it;
            </p>
            <p className="content__p">
              – Measures we take to keep your information secure;
            </p>
            <p className="content__p">
              – The legal bases under which we process your data;
            </p>
            <p className="content__p">
              – How long we retain your information and where we store it;
            </p>
            <p className="content__p">
              – When and why we share your information with third parties,
              including transfers outside of the European Economic Area (the
              “EEA”); and
            </p>
            <p className="content__p">
              – Changes or updates to our Privacy Policy.
            </p>

            <h1 className="content__noidung">15. Contact us</h1>

            <p className="content__p">
              If you have any questions or concerns about any of the matters in
              relation to this Privacy Policy, including to exercise any of your
              rights, then there are several way of contacting us:
            </p>
            <p className="content__p">
              {" "}
              – Via email to Email Support: support@zokstudio.com or{" "}
              <Link
                href={"https://www.facebook.com/messages/t/115166541571562"}
              >
                {" "}
                via message Facebook{" "}
              </Link>
            </p>
            <p className="content__p">
              {" "}
              – Via our address: 118 Y LAN NGUYEN PHI ST, Danang, Vietnam
              (550000).
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {} }
}
