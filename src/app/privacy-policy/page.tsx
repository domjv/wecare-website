import AboutSection from '@/components/AboutSection';
import HeadingDescription from '@/components/HeadingDescription';
import SubPageHeader from '@/components/SubPageHeader';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <SubPageHeader
        title="Privacy Policy"
        subtitle="Dedicated to high-quality, culturally inclusive care across a diverse range of services and programs."
      />
      <HeadingDescription
        heading="We care Community Support Services Privacy Policy"
        descriptions={[
          'This Privacy Policy describes how We care Community Support Services (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from  (the "Site") or otherwise communicate with us (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.',
          'Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.',
        ]}
      />

      <HeadingDescription
        heading="Changes to This Privacy Policy"
        descriptions={[
          'We may update this Privacy Policy from time to time, including reflecting changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.',
        ]}
      />
      <HeadingDescription heading="How We Collect and Use Your Personal Information" descriptions={['']} />
      <HeadingDescription
        heading=""
        descriptions={[
          'To provide the Services, we collect and have collected over the past 12 month’s personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.',
          'In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.',
        ]}
      />
      <HeadingDescription
        heading="What Personal Information We Collect"
        descriptions={[
          'The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.',
        ]}
      />
      <HeadingDescription heading="Information We Collect Directly from You" descriptions={['']} />
      <HeadingDescription
        heading=""
        descriptions={['Information that you directly submit to us through our Services may include:']}
        bulletPoints={[
          'Basic contact details including your name, address, phone number, email.',
          'Order information including your name,  address, payment confirmation, email address, phone number.',
          'Account information including your username, password, security questions.',
          'Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.',
        ]}
        conclusionDescriptions={[
          'Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.',
        ]}
      />
      <HeadingDescription
        heading="Information We Collect through Cookies"
        descriptions={[
          'We also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, and information about your network connection, your IP address and other information regarding your interaction with the Services.',
        ]}
      />
      <HeadingDescription
        heading="How We Use Your Personal Information"
        bulletPoints={[
          'Providing Products and Services: We use your personal information to provide you with the Services in order to perform our contract with you, including type of services, fulfill your needs, to send notifications to you related to you services, or other transactions, to create, maintain.',
          'Marketing and Advertising: We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.',
          'Security and Fraud Prevention: We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.',
          'Communicating with you: We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.',
        ]}
      />
      <HeadingDescription
        heading="How We Disclose Personal Information"
        descriptions={[
          'In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:',
        ]}
        bulletPoints={[
          'With in organization employees who are working with WE Care such as Support worker, Management team. Third party will be as per your consent Doctor, allied health, Hospital, Support coordinators and Plan managers',
          'When you direct, request us or otherwise consent to our disclosure of certain information to third parties.',
          'In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.',
        ]}
      />
      <HeadingDescription
        heading="Security and Retention of Your Information"
        descriptions={[
          'Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee "perfect security." In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.',
          'How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.',
        ]}
      />
      <HeadingDescription
        heading="Your Rights and Choices"
        descriptions={[
          'Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.',
        ]}
        bulletPoints={[
          'Right to Access / Know. You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.',
          'Right to Delete. You may have a right to request that we delete personal information we maintain about you.',
          'Right to Correct. You may have a right to request that we correct inaccurate personal information we maintain about you.',
          'Right of Portability. You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.',
          'Right to Opt out of Sale or Sharing or Targeted Advertising. You may have a right to direct us not to "sell" or "share" your personal information or to opt out of the processing of your personal information for purposes considered to be "targeted advertising", as defined in applicable privacy laws. Please note that if you visit our Site with the Global Privacy Control opt-out preference signal enabled, depending on where you are, we will automatically treat this as a request to opt-out of the "sale" or "sharing" of information for the device and browser that you use to visit the Site.',
          'Right to Limit and/or Opt out of Use and Disclosure of Sensitive Personal Information. You may have a right to direct us to limit our use and/or disclosure of sensitive personal information to only what is necessary to perform the Services or provide the goods reasonably expected by an average individual.',
          'Restriction of Processing: You may have the right to ask us to stop or restrict our processing of personal information.',
          'Withdrawal of Consent: Where we rely on consent to process your personal information, you may have the right to withdraw this consent.',
          'Appeal: You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.',
          'Managing Communication Preferences: We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.',
        ]}
        conclusionDescriptions={[
          'You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.',
          'We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, You may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.',
        ]}
      />
      <HeadingDescription
        heading="Complaints"
        descriptions={[
          'If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.',
        ]}
      />
      <HeadingDescription
        heading="Contact"
        descriptions={[
          'Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call 07 2802 4100 or email us at info@wecaresupport.net.',
        ]}
      />
    </div>
  );
};

export default PrivacyPolicy;
