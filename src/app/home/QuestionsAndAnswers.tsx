import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. Kenapa harus menggunakan resume builder? Kenapa resume builder lebih baik dibanding resume manual/doc?",
    answer: (
      <>
        <p>
          Ada dua cara untuk membuat resume saat ini. 
          Salah satunya adalah menggunakan template, seperti halnya Ms Word ataupun Google Docs, 
          dan menyesuaikannya sesuai kebutuhan kamu. <br />
          Pilihan lainnya adalah menggunakan resume builder, 
          sebuah tools online yang memungkinkan kamu memasukkan informasi secara 
          otomatis tanpa harus memusingkan tampilan ataupun format tulisan.
        </p>
        <p>
          Menggunakan template resume memerlukan pengaturan manual satu persatu dan wasting time, 
          seperti menyalin dan menempel bagian teks, mengatur jarak dan ukuran font, yang pasti 
          memakan waktu dan tentunya rentan terhadap kesalahan. 
         <br /> 
         Oleh karena itu, aplikasi online seperti 
         {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>ResumeHQ</span> {''}
          bisa menghemat waktumu dan pastinya mencegah kesalahan format penulisan secara otomatis.
          <br /> Aplikasi ini juga menawarkan kemudahan untuk mengubah jenis ataupun ukuran font, warna, 
          hanya dengan satu kali klik.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. Apa yang membuat ResumeHQ lebih Unique dibanding  lainnya?",
    answer: (
      <>
        <p> 
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-600'>ResumeHQ</span> {''}
         unggul dengan 2 fitur khas:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-600'>ResumeHQ</span>{' '}
            dirancang khusus untuk pasar global, baik itu lokal maupun Internasional seperti halnya Amerika dan Eropa.
          </span>
          <br />
          Berbeda dengan tools lain yang hanya menargetkan audiens global dan menawarkan banyak format yang terkadang membuat kandiat kebingungan. <br />
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-600'>ResumeHQ</span>{' '}
           sengaja hanya menyediakan opsi STANDARD yang sesuai dengan praktik terbaik di kancah lokal maupun Internasional. <br />
           Misalnya, 
           {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-600'>ResumeHQ</span> {''}
            tidak menyertakan opsi untuk menambahkan foto profil guna menghindari bias dan diskriminasi <i>(setidaknya hingga saat ini)</i>. <br /> 
           Kami hanya menawarkan bagian inti, seperti profil, pengalaman kerja, 
           pendidikan, dan keterampilan, serta menghilangkan bagian-bagian yang tidak perlu, 
           seperti referensi. <br />
           Selain itu, {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-600'>ResumeHQ</span> {''}
            hanya menawarkan desain resume kolom tunggal dari bagian atas hingga bagian bawah, tidak seperti desain dua kolom, 
            karena desain kolom tunggal lebih cocok untuk sistem ATS (Application Tracking System). 
          <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-green-300'>ResumeHQ</span> {''}
             sangat berfokus pada privasi.
          </span>{" "}
          <br />
          Jika aplikasi resume lain mungkin memerlukan pendaftaran melalui 
          email dan menyimpan data pengguna di database mereka, {' '} <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500'>ResumeHQ</span> {' '} 
          percaya bahwa data resume harus tetap bersifat pribadi dan hanya dapat diakses 
          oleh pengguna di perangkat lokal mereka. <br /> Oleh karena itu, 
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>ResumeHQ</span> {''}
          tidak memerlukan pendaftaran ataupun akun untuk menggunakan aplikasi, 
          karena semua data akan tersimpan pada browser pengguna yang hanya 
          dapat diakses oleh pengguna itu sendiri.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Siapa dibalik ResumeHQ?",
    answer: (
      <p>
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-600'>ResumeHQ</span> {''}
         dikembangkan oleh beberapa tim engineer dari {" "}
         <Link href="https://www.lokerhq.com">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600'>Loker Headquarters</span>,{''}
          </Link>{" "}
        sebagai sarana yang diharapkan dapat membantu para pencari kerja membuat resume yang lebih profesional.
      </p>
    ),
  },
  {
    question: "Q4. Bagaimana cara mensupport kami?",
    answer: (
      <>
        <p>
        Cara terbaik untuk mendukung 
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-600'>ResumeHQ</span> {''}
         adalah dengan mebagikannya kepada teman kampus, ataupun rekan kerja.
         <br />
         Kamu juga bisa mengirimkan kritik ataupun saran kepada tim Loker Headquarter melalui email:
        {" "}
          <Link href="mailto:team@lokerhq.com"><span className="border-solid border-2 border-indigo-600 px-1 py-1 rounded-md">team@lokerhq.com</span></Link>{" "}
          <br />
          Jangan lupa follow sosial media kami di: 
          {" "}
          <Link href="https://linkedin.com/company/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-600'>LinkedIn</span>, {''}
          </Link>{" "}
          <Link href="https://twitter.com/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600'>Twitter</span>, {''}
          </Link>{" "}
          <Link href="https://t.me/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600'>Telegram</span>, {''}
          </Link>{" "}
          <Link href="https://facebook.com/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600'>Facebook</span>, {''}
          </Link>{" "}
          atau{" "}
          <Link href="https://instagram.com/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>Instagram</span>. {''}
          </Link>
        </p>
        <p>
        <br />Tujuan kami adalah menjangkau lebih 
        banyak orang dan membantu mereka yang mengalami kesulitan dalam membuat resume.
        <br />
        Jadi, dukungan dalam bentuk apapun akan sangat membantu kami untuk terus mengembangkan platform ini.
        </p>
        <hr />
        <i>
          Salam... <br />
          <b>The Loker Headquarters Team</b>
        </i>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Tentang <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600'>ResumeHQ</span></h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
