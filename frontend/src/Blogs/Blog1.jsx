import React from "react";

export default function Blog1() {
  return (
    // <section className='blogs'>
    //     <h2 className='text-center mt-4'> Our Blogs</h2>
    //     <div class="container blog-card">
    //         <div class="card-blog">
    //             <figure class="card__thumb">
    //                 <img src="https://source.unsplash.com/G2ifDHnHZ6Y/300x510" alt="Picture by Štefan Štefančík" class="card__image" />
    //                 <figcaption class="card__caption">
    //                     <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
    //                     <p class="card__snippet heading3">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
    //                     <a href="" class="card__button">Read more</a>
    //                 </figcaption>
    //             </figure>
    //         </div>

    //         <div class="card-blog">
    //             <figure class="card__thumb">
    //                 <img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" class="card__image" />
    //                 <figcaption class="card__caption">
    //                     <h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
    //                     <p class="card__snippet heading3">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
    //                     <a href="" class="card__button">Read more</a>
    //                 </figcaption>
    //             </figure>
    //         </div>

    //         <div class="card-blog">
    //             <figure class="card__thumb">
    //                 <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="card__image" />
    //                 <figcaption class="card__caption">
    //                     <h2 class="card__title">Why You Should Bring Your Dog To Work</h2>
    //                     <p class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
    //                     <a href="" class="card__button">Read more</a>
    //                 </figcaption>
    //             </figure>
    //         </div>
    //     </div>

    //     {/* <p class="disclaimer">All pictures were taken from <a class="disclaimer__link" href="https://unsplash.com/" target="_blank">Unsplash.</a></p> */}
    // </section>

    // SECOND CARD BLOGS
    <section className="blogs1">
      <div>
        <h3 className="text-center mt-4 "> OUR BLOGS</h3>
        <div class="container blog-card">
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-blue">Technology</span>
              <h4 className="heading3">What's new in 2022 Tech</h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?food"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-brown">Food</span>
              <h4 className="heading3">Delicious Food</h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">Jony Doe</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?car,automobile"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-red">Automobile</span>
              <h4 className="heading3">Race to your heart </h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">John Doe</h5>
                  <small>2d ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container blog-card">
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-blue">Technology</span>
              <h4 className="heading3">What's new in 2022 Tech</h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?food"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-brown">Food</span>
              <h4 className="heading3">Delicious Food</h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">Jony Doe</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?car,automobile"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-red">Automobile</span>
              <h4 className="heading3">Race to your heart </h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">John Doe</h5>
                  <small>2d ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container blog-card">
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-blue">Technology</span>
              <h4 className="heading3">What's new in 2022 Tech</h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?food"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-brown">Food</span>
              <h4 className="heading3">Delicious Food</h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">Jony Doe</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card-blog">
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?car,automobile"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-red">Automobile</span>
              <h4 className="heading3">Race to your heart </h4>
              <p className="heading3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus.
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5 className="heading3">John Doe</h5>
                  <small>2d ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
